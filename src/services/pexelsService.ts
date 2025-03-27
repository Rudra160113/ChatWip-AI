
// Pexels API service
export interface PexelsSearchRequest {
  query: string;
  orientation?: string;
  size?: string;
  color?: string;
  page?: number;
  per_page?: number;
}

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface PexelsResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
}

export const searchPexelsImages = async (requestData: PexelsSearchRequest): Promise<PexelsPhoto[]> => {
  try {
    const apiKey = "YOUR_PEXELS_API_KEY"; // Replace with actual key in production
    const queryParams = new URLSearchParams({
      query: requestData.query,
      orientation: requestData.orientation || "landscape",
      size: requestData.size || "medium",
      page: String(requestData.page || 1),
      per_page: String(requestData.per_page || 15)
    });
    
    if (requestData.color) {
      queryParams.append("color", requestData.color);
    }
    
    const response = await fetch(`https://api.pexels.com/v1/search?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        "Authorization": apiKey
      }
    });

    const data: PexelsResponse = await response.json();
    
    if (data.photos && data.photos.length > 0) {
      return data.photos;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error searching Pexels images:", error);
    throw error;
  }
};
