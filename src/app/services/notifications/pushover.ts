const pushoverConfig = {
  token: process.env.NEXT_PUBLIC_PUSHOVER_TOKEN,  // Your app token: am7qfpzsn4vcf19c2vn55ox7d2sv7q
  user: process.env.NEXT_PUBLIC_PUSHOVER_USER,    // Your group key: gfgiom7homiy54vu79beaospw87rnf
};

// Debug logging only in development
if (process.env.NODE_ENV === 'development') {
  console.log('Pushover config:', {
    token: pushoverConfig.token?.substring(0, 5) + '...',
    user: pushoverConfig.user?.substring(0, 5) + '...',
  });
}

export const sendPushoverNotification = async (message: string) => {
    try {
      const response = await fetch('https://api.pushover.net/1/messages.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: process.env.NEXT_PUBLIC_PUSHOVER_TOKEN,
          user: process.env.NEXT_PUBLIC_PUSHOVER_USER,
          message: message,
          title: 'OFF New Visitor',
          priority: 1
        })
      });
      
      const data = await response.json();
      
      // Keep error logging in all environments for debugging issues
      if (!response.ok) {
        console.error('Pushover error:', {
          status: response.status,
          data: data,
          config: process.env.NODE_ENV === 'development' ? {
            token: process.env.NEXT_PUBLIC_PUSHOVER_TOKEN?.substring(0, 5) + '...',
            user: process.env.NEXT_PUBLIC_PUSHOVER_USER?.substring(0, 5) + '...',
          } : 'Hidden in production'
        });
      }
      
      return data;
    } catch (error) {
      console.error('Error sending notification:', error);
      throw error;
    }
  }; 