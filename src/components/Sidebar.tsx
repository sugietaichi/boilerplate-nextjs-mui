import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { SidebarType } from './Layout'
import { ListItemButton } from '@mui/material'

type Props = {
  open: boolean
  handleClose: () => void
  items: SidebarType[]
}
export const Sidebar = ({ open, handleClose, items }: Props) => {
  const list = () => (
    <Box sx={{ width: 250 }} role='presentation' onClick={handleClose} onKeyDown={handleClose}>
      <List>
        {items.map(({ text, icon, linkURL }) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton component='a' href={linkURL}>
                {icon}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
      </>
    </div>
  )
}
