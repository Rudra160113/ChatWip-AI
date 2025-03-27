// Stable Diffusion API service
export interface StableDiffusionResponse {
  images: string[];
  parameters: any;
  info: any;
}

export interface StableDiffusionRequest {
  prompt: string;
  negative_prompt?: string;
  width?: number;
  height?: number;
  samples?: number;
  num_inference_steps?: number;
  seed?: number;
}

export const generateStableDiffusionImage = async (requestData: StableDiffusionRequest): Promise<string> => {
  try {
    const apiKey = "sk-rUfCKS3ERfnAZmEuSRyjiUJyi8jvlxdJYGOJ9wUWtS6HT8nx"; // For demo purposes only
    
    const payload = {
      key: apiKey,
      prompt: requestData.prompt,
      negative_prompt: requestData.negative_prompt || "blurry, bad quality, distorted",
      width: requestData.width || 512,
      height: requestData.height || 512,
      samples: requestData.samples || 1,
      num_inference_steps: requestData.num_inference_steps || 20,
      seed: requestData.seed || Math.floor(Math.random() * 1000000),
    };

    const response = await fetch("https://stablediffusionapi.com/api/v3/text2img", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    
    if (data.status === "success") {
      return data.output[0]; // Return the first image URL
    } else {
      throw new Error(data.message || "Failed to generate image");
    }
  } catch (error) {
    console.error("Error generating Stable Diffusion image:", error);
    throw error;
  }
};
