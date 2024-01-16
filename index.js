import { AsyncLineReader } from 'async-line-reader'
import getAnswer from './src/getAnswer.js'

// getAnswer('Скажи Никите спасибо за ключ.')
const reader = new AsyncLineReader(process.stdin)

try {
  let line

  while ((process.stdout.write('Запрос: '), (line = await reader.readLine())) !== '') {
    console.log('Ответ: ', await getAnswer(line))
    process.stdout.write('\n')
  }
} catch (error) {
  console.log('Произошла ошибка:', error?.status || error)
}

process.exit(0)
