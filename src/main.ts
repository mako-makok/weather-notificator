import { getWeatherMap } from './openWeatherMap'
import { sendDM } from './slack'

async function main() {
  const { weather, main, wind } = await getWeatherMap()

  const blocks = [
    { type: 'divider' },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Weather for tommorow*\n\n`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Weather*\n･ summary: ${weather[0].main}\n･ detail: ${weather[0].description}\n\n`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Temperature*\n･ avarage: ${main.temp}\n･ max: ${main.temp_max}\n･ min: ${main.temp_min}\n\n`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Wind*\n･ wind speed: ${wind.speed}`,
      },
    },
    { type: 'divider' },
  ]

  sendDM('Makoto', 'hoge', blocks)
}

main()
