import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface LoginTestData {
  validUser: {
    username: string;
    password: string;
  };
  invalidUsers: Array<{
    username: string;
    password: string;
  }>;
}

export class AITestHelper {
  static async generateLoginTestData(): Promise<LoginTestData> {
    const prompt = `Genera datos para probar el login de OrangeHRM en formato JSON EXACTO:
    {
      "validUser": {
        "username": "Admin",
        "password": "admin123"
      },
      "invalidUsers": [
        {"username": "usuario1", "password": "incorrecto1"},
        {"username": "Admin", "password": "wrongpass"},
        {"username": "", "password": "admin123"}
      ]
    }
    Solo devuelve el JSON, sin comentarios ni texto adicional.`;

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { 
            role: 'system', 
            content: 'Devuelve SOLO el JSON solicitado, sin markdown ni explicaciones.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3, // Menor temperatura para respuestas más deterministas
        response_format: { type: "json_object" }
      });

      const content = response.choices[0]?.message?.content;
      if (!content) throw new Error('No se recibió respuesta de la API');
      
      const result: LoginTestData = JSON.parse(content);
      
      // Validación básica de la estructura
      if (!result.validUser || !result.invalidUsers) {
        throw new Error('Estructura de datos incorrecta');
      }
      
      return result;
    } catch (error) {
      console.error('Error al generar datos de prueba:', error);
      // Datos de fallback
      return {
        validUser: {
          username: 'Admin',
          password: 'admin123'
        },
        invalidUsers: [
          { username: 'invalid', password: 'invalid123' },
          { username: 'test', password: 'wrongpass' },
          { username: '', password: 'admin123' }
        ]
      };
    }
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