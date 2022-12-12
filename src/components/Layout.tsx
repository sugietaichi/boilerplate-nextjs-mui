import { Avatar, Container, createTheme, Paper, ThemeProvider } from '@mui/material'
import { ReactElement, useState } from 'react'
import { useAuthContext } from './AuthContext'
import Copyright from './Copyright'
import Header from './Header'
import { Sidebar } from './Sidebar'

export type SidebarType = {
  text: string
  icon: any
  linkURL: string
}

const sidebarItems: SidebarType[] = [
  {
    text: 'title1',
    icon: <Avatar>1</Avatar>,
    linkURL: 'https://google.com',
  },
  {
    text: 'title2',
    icon: <Avatar>2</Avatar>,
    linkURL: 'https://google.com',
  },
]

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
      <Header title={'個撮求人'} handleOpen={handleDrawerOpen} />
      <Sidebar items={sidebarItems} open={open} handleClose={handleDrawerClose} />

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
