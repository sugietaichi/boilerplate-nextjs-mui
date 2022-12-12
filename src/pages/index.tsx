import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Copyright from '@components/Copyright'

export default function Home() {
  return (
    <>
      <Typography>{process.env.NEXT_PUBLIC_KEY1}</Typography>

      <Copyright />
    </>
  )
}
