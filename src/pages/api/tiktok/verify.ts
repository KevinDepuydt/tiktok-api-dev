import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = 'awesome_token'
  res.redirect(`/?tiktok_access_token=${token}`)
}
