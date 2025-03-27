// Restack API service
// Note: This is a placeholder as Restack provides multiple services and the exact API depends on the service you want to use
export interface RestackRequest {
  endpoint: string;
  method?: string;
  data?: any;
  headers?: Record<string, string>;
}

export const callRestackAPI = async (requestData: RestackRequest): Promise<any> => {
  try {
    const apiKey = "6c00fe4bf759d23055e8bf1da96b00fbaad57cb4865c04361699126942674507"; // Replace with actual key in production
    
    const response = await fetch(requestData.endpoint, {
      method: requestData.method || "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...requestData.headers
      },
      body: requestData.method !== "GET" && requestData.data ? JSON.stringify(requestData.data) : undefined,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error calling Restack API:", error);
    throw error;
  }
};
