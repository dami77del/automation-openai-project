import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class AITestHelper {
  static async generateLoginTestData() {
    const prompt = `Genera datos REALES para probar el login de OrangeHRM (formato JSON):
    - 1 usuario válido (usuario: "Admin", password: "admin123")
    - 3 usuarios inválidos (ej: usuario incorrecto, password incorrecto, campos vacíos)`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Genera datos de prueba realistas.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.5,
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0]?.message?.content || '{}');
  }

  static async generateTestScenarios(prompt: string) {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un experto en QA generando casos de prueba.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    });

    return response.choices[0]?.message?.content || 'No se generaron casos.';
  }
}