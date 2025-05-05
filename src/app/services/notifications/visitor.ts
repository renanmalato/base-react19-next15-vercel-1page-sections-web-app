import { sendPushoverNotification } from './pushover';

export const fetchVisitorLocation = async () => {
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
    const { ip } = await ipResponse.json();
    
    // Use ipapi.co instead of ip-api.com (more reliable and CORS-friendly)
    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    const data = await locationResponse.json();

    if (data.city && data.region && data.country_name) {
      await sendPushoverNotification(
        `New visitor from ${data.city}, ${data.region}, ${data.country_name}`
      );
    } else {
      // Fallback if we can't get detailed location
      await sendPushoverNotification(`New visitor from IP: ${ip}`);
    }

  } catch (error: any) {
    console.error('Visitor tracking error:', {
      message: error.message,
      type: error.name,
      stack: error.stack
    });

    // Send a more detailed error notification
    await sendPushoverNotification(
      `Visitor tracking error: ${error.name} - ${error.message}`
    );
  }
};
