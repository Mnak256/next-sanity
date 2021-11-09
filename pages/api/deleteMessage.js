import { messages } from './messages'

export default function handler(req, res) {
  if (req.method !== 'DELETE') {
    res
      .status(400)
      .send({ message: 'Only DELETE requests allowed for deleteMessage' })
    return
  }
  messages.length = 0
  res.status(200).json({ message: 'deleted' })
}
