export interface DeepAIConfig {
  apiKey: string;
}

export interface DeepAIResponse {
  id: string;
  output_url: string;
}

export const baseUrl = "https://api.deepai.org/api";

export class DeepAIClient {
  private config: DeepAIConfig;

  constructor(config: DeepAIConfig) {
    this.config = config;
  }

  async generateImage(prompt: string, model: string = "text2img"): Promise<DeepAIResponse> {
    const response = await fetch(`${baseUrl}/${model}`, {
      method: "POST",
      headers: {
        "Api-Key": this.config.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepAI API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }
}