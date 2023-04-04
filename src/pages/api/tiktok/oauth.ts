import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

type Data = {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const csrfState = Math.random().toString(36).substring(2)
  const { CLIENT_KEY, SERVER_ENDPOINT_REDIRECT } = process.env;
  const url =  `https://www.tiktok.com/auth/authorize?client_key=${CLIENT_KEY}&scope=user.info.basic,video.list&response_type=code&redirect_uri=${SERVER_ENDPOINT_REDIRECT}&state=${csrfState}`;

  res.setHeader('Set-Cookie', serialize('csrfState', csrfState, { maxAge: 60000 }))
  res.redirect(url)
}
