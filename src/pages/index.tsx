import { useAuthContext } from '@components/AuthContext'
import { auth } from '@utilities/firebase'
import axios from 'axios'
import { signInWithCustomToken } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const { user } = useAuthContext()
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) return
    if (!router.query.code) return
    signIn()
  }, [router.query.code])

  const signIn = async () => {
    const token = (await axios.post('/api/create-custom-token', { code: router.query.code })).data.token
    await signInWithCustomToken(auth, token)
  }

  const handleClick = async () => {
    const res = await axios.get('/api/create-state')
    const state = res.data.state
    const url = new URL('https://access.line.me/oauth2/v2.1/authorize')
    url.search = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_LINE_CLIENT_ID ? process.env.NEXT_PUBLIC_LINE_CLIENT_ID : 'FIXME', //todo: どっかで環境変数の判定を持たせる
      state,
      scope: 'profile openid',
      bot_prompt: 'aggressive', // ログイン時にBOT連携
      redirect_uri: 'http://localhost:3000/api/line-code-webhook',
    }).toString()

    router.replace(url.href)
  }
  return (
    <>
      {user && <>{user.uid}でログイン中</>}
      <button onClick={handleClick}>login line.</button>
    </>
  )
}
