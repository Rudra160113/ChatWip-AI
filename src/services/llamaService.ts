// Llama API Service
export interface LlamaRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface LlamaImageRequest {
  prompt: string;
  model?: string;
  size?: string;
  quality?: string;
}

export const generateLlamaResponse = async (requestData: LlamaRequest): Promise<string> => {
  try {
    // Using the GitHub developer key for Llama
    const apiKey = "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";
    
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: requestData.model || "meta-llama/Llama-3-70b-chat",
        messages: [
          {
            role: "system",
            content: "You are a friendly and emotionally aware AI assistant. Express emotions appropriately, use casual language, show enthusiasm, and be genuinely supportive. Respond like a friend would."
          },
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
      throw new Error("No response generated");
    }
  } catch (error) {
    console.error("Error generating Llama response:", error);
    // Return a fallback response for demo purposes
    return "I'm having trouble connecting to my Llama brain right now, but I'd still love to chat with you! How can I help?";
  }
};

export const generateLlamaImage = async (requestData: LlamaImageRequest): Promise<string> => {
  try {
    // Using the GitHub developer key for Llama
    const apiKey = "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";
    
    const response = await fetch("https://api.together.xyz/v1/images/generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: requestData.model || "stabilityai/stable-diffusion-xl-base-1.0",
        prompt: requestData.prompt,
        n: 1,
        size: requestData.size || "1024x1024",
        response_format: "url"
      }),
    });

    const data = await response.json();
    
    if (data.data && data.data.length > 0) {
      return data.data[0].url;
    } else if (data.error) {
      console.error("Llama image generation error:", data.error);
      throw new Error(data.error.message || "Error generating image");
    } else {
      throw new Error("No image generated");
    }
  } catch (error) {
    console.error("Error generating Llama image:", error);
    throw error;
  }
};
