import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

type Data = {}

const { TIKTOK_CLIENT_KEY, SERVER_ENDPOINT_REDIRECT } = process.env;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const csrfState = Math.random().toString(36).substring(2)
  const redirectUri = encodeURIComponent(SERVER_ENDPOINT_REDIRECT)
  const url =  `https://www.tiktok.com/auth/authorize?client_key=${TIKTOK_CLIENT_KEY}&scope=user.info.basic,video.list&response_type=code&redirect_uri=${redirectUri}&state=${csrfState}`;

  res.setHeader('Set-Cookie', serialize('csrfState', csrfState, { maxAge: 60000 }))
  res.redirect(url)
}
