import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material'

interface Props {
  subHeader?: string
  rowsInfo: SideBarRowStruct[]
}

interface SideBarRowStruct {
  textValue: string
  lintTo: string
  muiIcon?: any
}

export const SidebarList = ({ subHeader, rowsInfo }: Props) => {
  return (
    <>
      <Divider />
      <List
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            {subHeader}
          </ListSubheader>
        }
      >
        {rowsInfo.map((v, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton component='a' href={v.lintTo}>
              <ListItemIcon>
                {v.muiIcon ?? (
                  <Avatar sx={{ bgcolor: 'primary' }} aria-label='recipe'>
                    #
                  </Avatar>
                )}
              </ListItemIcon>
              <ListItemText primary={v.textValue} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
