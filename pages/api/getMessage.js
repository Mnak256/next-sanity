import { messages } from './messages'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res
      .status(400)
      .send({ message: 'Only GET requests allowed for getMessage' })
    return
  }
  res.status(200).json(messages)
}
