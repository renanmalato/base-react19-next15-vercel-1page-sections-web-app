interface PushoverConfig {
  token: string | undefined;
  user: string | undefined;
}

interface PushoverResponse {
  status: number;
  request: string;
}

const pushoverConfig: PushoverConfig = {
  token: process.env.NEXT_PUBLIC_PUSHOVER_TOKEN,
  user: process.env.NEXT_PUBLIC_PUSHOVER_USER,
};

// Debug logging only in development
if (process.env.NODE_ENV === 'development') {
  console.log('Pushover config:', {
    token: pushoverConfig.token?.substring(0, 5) + '...',
    user: pushoverConfig.user?.substring(0, 5) + '...',
  });
}

export const sendPushoverNotification = async (message: string): Promise<PushoverResponse> => {
  if (!pushoverConfig.token || !pushoverConfig.user) {
    throw new Error('Pushover configuration is missing');
  }

  try {
    const response = await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: pushoverConfig.token,
        user: pushoverConfig.user,
        message: message,
        title: 'musica.renanmalato | New Visitor',
        priority: 1
      })
    });
    
    const data = await response.json() as PushoverResponse;
    
    if (!response.ok) {
      console.error('Pushover error:', {
        status: response.status,
        data: data,
        config: process.env.NODE_ENV === 'development' ? {
          token: pushoverConfig.token?.substring(0, 5) + '...',
          user: pushoverConfig.user?.substring(0, 5) + '...',
        } : 'Hidden in production'
      });
      throw new Error(`Pushover API error: ${response.status}`);
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending notification:', error.message);
    } else {
      console.error('Unknown error sending notification:', error);
    }
    throw error;
  }
}; 