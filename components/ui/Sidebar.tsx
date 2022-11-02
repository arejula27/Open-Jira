import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { UIContext } from '../../context/ui/UIContext';


const menuItems: String[] = ['Inbox', 'Starred', 'Send email', 'Drafts']



export const Sidebar = () => {

  const {sideMenuIsOpen, closeSideMenu} = useContext(UIContext);


  return (
    <Drawer
      anchor="left"
      open={sideMenuIsOpen}
      onClose={closeSideMenu}
    >
        <Box sx={{padding:"5px 10px" }}>
            <Typography variant='h4'>Menú</Typography>
        </Box>
        <List>
            {
                menuItems.map((text, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
            

        </List>
        <Divider/>
        <List>
            {
                menuItems.map((text, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
            

        </List>
   
    </Drawer>
  )
}


