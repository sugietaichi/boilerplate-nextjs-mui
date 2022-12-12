import { Typography } from '@mui/material'
import Copyright from '@components/Copyright'

export default function Home() {
  return (
    <>
      <Typography>{process.env.NEXT_PUBLIC_KEY}</Typography>

      <Copyright />
    </>
  )
}
