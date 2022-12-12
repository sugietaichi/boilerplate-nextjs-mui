import { Container, createTheme, Paper, ThemeProvider } from '@mui/material'
import { ReactElement, useState } from 'react'
import { useAuthContext } from './AuthContext'
import Copyright from './Copyright'
import Header from './Header'
import { Sidebar } from './Sidebar'

type Props = Required<{
  readonly children: ReactElement
}>

const theme = createTheme()

export const Layout = ({ children }: Props) => {
  const { user } = useAuthContext()

  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <>
      <Header onClickMenuIcon={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />

      {/* <FloatingActionButton /> */}
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
          <Paper variant='outlined' sx={{ my: { xs: 3 }, p: { xs: 2 } }}>
            {children}
          </Paper>
        </Container>
      </ThemeProvider>
      <Copyright />
    </>
  )
}
