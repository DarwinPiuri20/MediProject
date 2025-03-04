import openai
import os

# Configurar la API Key de OpenAI desde variable de entorno
openai.api_key = os.getenv("OPENAI_API_KEY")

def chat_gpt(pregunta):
    respuesta = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": pregunta}]
    )
    return respuesta["choices"][0]["message"]["content"]

pregunta = input("Tú: ")
print("ChatGPT:", chat_gpt(pregunta))
