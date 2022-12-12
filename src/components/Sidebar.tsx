import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Avatar } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { SidebarList } from './SidebarList'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

interface Props {
  open: boolean
  handleDrawerClose: any
}

export const Sidebar = ({ open, handleDrawerClose }: Props) => {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <SidebarList
          subHeader='フォーマット'
          rowsInfo={[
            {
              textValue: '個撮・同人AV',
              lintTo: '/format/kosatsu',
              muiIcon: (
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  個
                </Avatar>
              ),
            },
            {
              textValue: '出稼ぎ',
              lintTo: '/format/dekasegi',
              muiIcon: (
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  出
                </Avatar>
              ),
            },
            {
              textValue: '在籍',
              lintTo: '/format/zaiseki',
              muiIcon: (
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  在
                </Avatar>
              ),
            },
            {
              textValue: 'デリヘル',
              lintTo: '/format/deriheru',
              muiIcon: (
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  デ
                </Avatar>
              ),
            },
          ]}
        />
        <SidebarList
          subHeader='案件'
          rowsInfo={[
            {
              textValue: 'おすすめ',
              lintTo: '/anken/recommend',
              muiIcon: (
                <Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
                  勧
                </Avatar>
              ),
            },
            {
              textValue: '個撮・同人AV',
              lintTo: '/anken/kosatsu',
              muiIcon: (
                <Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
                  個
                </Avatar>
              ),
            },
            {
              textValue: '出稼ぎ',
              lintTo: '/anken/dekasegi',
              muiIcon: (
                <Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
                  出
                </Avatar>
              ),
            },
            {
              textValue: '在籍',
              lintTo: '/anken/zaiseki',
              muiIcon: (
                <Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
                  在
                </Avatar>
              ),
            },
            {
              textValue: 'デリヘル',
              lintTo: '/anken/deriheru',
              muiIcon: (
                <Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
                  デ
                </Avatar>
              ),
            },
          ]}
        />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  )
}
