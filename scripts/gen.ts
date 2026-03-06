import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log('Generating image...');
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: 'A stressed HVAC contractor in a uniform, holding a smartphone to his ear, looking frustrated and overwhelmed. Dark navy background, cinematic lighting, high quality, realistic photography.',
    config: {
      imageConfig: {
        aspectRatio: '16:9',
        imageSize: '1K'
      }
    }
  });
  
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, 'base64');
      fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
      fs.writeFileSync(path.join(process.cwd(), 'public', 'stressed-contractor.png'), buffer);
      console.log('Image saved to public/stressed-contractor.png');
    }
  }
}
run().catch(console.error);
