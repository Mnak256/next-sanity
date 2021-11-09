import { messages } from './messages'

export default function handler(req, res) {
  if (req.method !== 'PUT') {
    res
      .status(400)
      .send({ message: 'Only PUT requests allowed for putMessage' })
    return
  }
  const {
    body: { message }
  } = req
  messages.push({ message })
  res.status(200).json({ message })
}
