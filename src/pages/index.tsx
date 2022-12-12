import { Typography } from '@mui/material'
import Copyright from '@components/Copyright'
import { useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@src/utilities/firebase'

export default function Home() {
  useEffect(() => {}, [])
  return (
    <>
      <Copyright />
    </>
  )
}
