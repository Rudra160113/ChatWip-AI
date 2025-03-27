// Gemini API service
export interface GeminiRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

export interface GeminiImageRequest {
  prompt: string;
  size?: string;
}

export interface GeminiResponse {
  text: string;
  finishReason: string;
}

export const generateGeminiResponse = async (requestData: GeminiRequest): Promise<string> => {
  try {
    // Using the correct Gemini API key
    const apiKey = "AIzaSyBIcE-GuKsv9KgiRZM4kpIEp5AGB5KPuQY";
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: requestData.prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: requestData.temperature || 0.7,
          maxOutputTokens: requestData.maxTokens || 1024,
        }
      }),
    });

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("No response generated");
    }
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    throw error;
  }
};

export const generateGeminiImage = async (requestData: GeminiImageRequest): Promise<string> => {
  try {
    // Using the Gemini API key
    const apiKey = "AIzaSyBIcE-GuKsv9KgiRZM4kpIEp5AGB5KPuQY";
    
    // Since Gemini doesn't have a direct image generation API in this version,
    // we'll use a fallback approach - either HuggingFace or a service that accepts the Gemini key
    
    // For now, let's implement a simulation that will be replaced with the actual implementation
    // when Gemini Image Generation API becomes available
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes only - in a production app, this would be handled by a real API call
    // This is a placeholder URL that would be replaced by the actual Gemini image URL
    const placeholderResponse = {
      image: {
        url: `https://source.unsplash.com/random/1024x1024/?${encodeURIComponent(requestData.prompt)}`
      }
    };
    
    if (placeholderResponse.image && placeholderResponse.image.url) {
      return placeholderResponse.image.url;
    } else {
      throw new Error("No image generated");
    }
  } catch (error) {
    console.error("Error generating Gemini image:", error);
    throw error;
  }
};
