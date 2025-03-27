
// HuggingFace API service
export interface HuggingFaceRequest {
  inputs: string;
  model?: string;
  parameters?: any;
}

export const generateHuggingFaceInference = async (requestData: HuggingFaceRequest): Promise<any> => {
  try {
    const apiKey = "YOUR_HUGGINGFACE_API_KEY"; // Replace with actual key in production
    const model = requestData.model || "mistralai/Mistral-7B-Instruct-v0.2";
    
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        inputs: requestData.inputs,
        parameters: requestData.parameters || {
          max_new_tokens: 250,
          temperature: 0.7,
          top_p: 0.95,
          do_sample: true
        }
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error generating HuggingFace inference:", error);
    throw error;
  }
};
