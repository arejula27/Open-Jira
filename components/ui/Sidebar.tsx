import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';


const menuItems: String[] = ['Inbox', 'Starred', 'Send email', 'Drafts']



export const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      onClose={( )=>console.log("cerrando")
      }
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


