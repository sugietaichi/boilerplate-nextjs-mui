import { Copyright } from '@mui/icons-material'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Typography>{process.env.NEXT_PUBLIC_KEY1}</Typography>

      <Copyright />
    </>
  )
}
