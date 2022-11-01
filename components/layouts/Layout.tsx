import { Box } from '@mui/system'
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { NavBar, Sidebar } from '../ui'

type Props = PropsWithChildren & {
    title?: string
    
}


export const Layout:FC<Props> = ({title= 'OpenJira',children}) => {
  return (
      //igual que la propiedad style pero con acceso al tema
    <Box sx={{flexGrow:1}}>
        <Head>
            <title>{title}</title>
        </Head>
          <NavBar></NavBar>
          <Sidebar/>
          <Box sx={{padding: '10px 20px'}}>
            {children}
          </Box>

    </Box>
  )
}
