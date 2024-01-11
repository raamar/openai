import openAiClient from './openAiClient.js'

/**
 *
 * @param {string} text
 */
const getAnswer = async (text) => {
  const stream = await openAiClient.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: text }],
    stream: true,
  })

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
}

export default getAnswer
