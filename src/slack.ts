import { post } from './http'

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL as string

export const sendDM = async (slackId: string, text: string, blocks: any): Promise<void> => {
  const body = {
    channel: `@${slackId}`,
    text,
    blocks,
    link_names: true,
  }

  await post(SLACK_WEBHOOK_URL, body)
}
