
// Gemini API service
export interface GeminiRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

export interface GeminiResponse {
  text: string;
  finishReason: string;
}

export const generateGeminiResponse = async (requestData: GeminiRequest): Promise<string> => {
  try {
    // Note: Gemini requires an API key that should be obtained from Google AI Studio
    // This is a placeholder implementation
    const apiKey = "AIzaSyCCf44h36tYYRW_7fonJPMweZHF_y-jw7E"; // Replace with actual key in production
    
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
