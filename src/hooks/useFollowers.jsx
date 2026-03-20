import { useState, useEffect } from 'react';

/**
 * Hook to automatically fetch Instagram follower count.
 * Currently uses a mock delayed response since Instagram blocks client-side CORS scraping.
 * Drop your API endpoint into the fetch function when deploying to a backend (like Vercel).
 */
export const useFollowers = (initialCount = 18000) => {
  const [followers, setFollowers] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        // TODO: Replace this simulated delay with your serverless function endpoint:
        // const response = await fetch('/api/instagram-followers');
        // const data = await response.json();
        // setFollowers(data.count);
        
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call network latency
        
        // Simulating the dynamic update because you mentioned you have >> 18k now!
        const liveCount = 18200; 
        
        setFollowers(liveCount);
      } catch (err) {
        console.warn("Failed to fetch live follower count, defaulting to initial");
        setFollowers(initialCount);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFollowers();
  }, [initialCount]);

  return { followers, isLoading };
};
