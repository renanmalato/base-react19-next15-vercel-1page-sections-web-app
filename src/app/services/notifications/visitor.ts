import { sendPushoverNotification } from './pushover';

interface IpResponse {
  ip: string;
}

interface LocationResponse {
  city: string;
  region: string;
  country_name: string;
}

export const fetchVisitorLocation = async (): Promise<void> => {
  if (typeof window === 'undefined') return;
  
  // More robust development check
  const isDevelopment = 
    process.env.NODE_ENV === 'development' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.port === '3500';

  if (isDevelopment) {
    console.log('🟣 Development environment detected - skipping visitor tracking');
    return;
  }

  try {
    // First try with ipify
    const ipResponse = await fetch('https://api.ipify.org?format=json', {
      mode: 'cors',  // Explicitly set CORS mode
    });
    const { ip } = await ipResponse.json() as IpResponse;
    
    // Use ipapi.co instead of ip-api.com (more reliable and CORS-friendly)
    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    const data = await locationResponse.json() as LocationResponse;

    if (data.city && data.region && data.country_name) {
      await sendPushoverNotification(
        `from ${data.city}, ${data.region}, ${data.country_name}`
      );
    } else {
      // Fallback if we can't get detailed location
      await sendPushoverNotification(`from IP: ${ip}`);
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error('Visitor tracking error:', {
        message: error.message,
        type: error.name,
        stack: error.stack
      });

      // Send a more detailed error notification
      await sendPushoverNotification(
        `Visitor tracking error: ${error.name} - ${error.message}`
      );
    } else {
      console.error('Unknown error:', error);
      await sendPushoverNotification('Unknown visitor tracking error occurred');
    }
  }
};
