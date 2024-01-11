import OpenAi from 'openai'

const openAiClient = new OpenAi({
  apiKey: process.env.OPENAI_KEY,
})

export default openAiClient
