
// OpenAI API service
export interface OpenAIRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface OpenAIImageRequest {
  prompt: string;
  model?: string;
  size?: string;
  quality?: string;
  n?: number;
}

export const generateOpenAICompletion = async (requestData: OpenAIRequest): Promise<string> => {
  try {
    const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with actual key in production
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: requestData.model || "gpt-4o",
        messages: [
          {
            role: "user",
            content: requestData.prompt
          }
        ],
        max_tokens: requestData.maxTokens || 1000,
        temperature: requestData.temperature || 0.7
      }),
    });

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      throw new Error("No completion generated");
    }
  } catch (error) {
    console.error("Error generating OpenAI completion:", error);
    throw error;
  }
};

export const generateOpenAIImage = async (requestData: OpenAIImageRequest): Promise<string> => {
  try {
    const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with actual key in production
    
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: requestData.model || "dall-e-3",
        prompt: requestData.prompt,
        n: requestData.n || 1,
        size: requestData.size || "1024x1024",
        quality: requestData.quality || "standard"
      }),
    });

    const data = await response.json();
    
    if (data.data && data.data.length > 0) {
      return data.data[0].url;
    } else {
      throw new Error("No image generated");
    }
  } catch (error) {
    console.error("Error generating OpenAI image:", error);
    throw error;
  }
};
