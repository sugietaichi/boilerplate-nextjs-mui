import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface Props {
  title: string
  handleOpen: any
}

export default function Header({ title, handleOpen }: Props) {
  const trigger = useScrollTrigger()
  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div'>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  )
}
