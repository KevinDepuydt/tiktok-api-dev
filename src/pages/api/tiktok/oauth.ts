import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

type Data = {}

const CLIENT_KEY = 'aw1nbfu73tmv181s'
const REDIRECT_URI = 'https://642c3d8b39a582000865aa4b--steady-bublanina-b25ff8.netlify.app/api/tiktok/verify'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const csrfState = Math.random().toString(36).substring(2)
  const redirectUri = encodeURIComponent(REDIRECT_URI)
  const url =  `https://www.tiktok.com/auth/authorize?client_key=${CLIENT_KEY}&scope=user.info.basic,video.list&response_type=code&redirect_uri=${redirectUri}&state=${csrfState}`;

  res.setHeader('Set-Cookie', serialize('csrfState', csrfState, { maxAge: 60000 }))
  res.redirect(url)
}
