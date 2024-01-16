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

  let answer = ''

  for await (const chunk of stream) {
    answer += chunk.choices[0]?.delta?.content || ''
  }

  return answer
}

export default getAnswer
