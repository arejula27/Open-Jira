import { Card, CardHeader, Grid } from '@mui/material';
import { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { EntrieList,NewEntry } from '../components/ui/';



 const  HomePage: NextPage=() =>{
  return (
    <Layout title='Home - OpenJira'>
      {/* Espaciado de 2 entre los hijos */}
      <Grid container spacing={2}>
        {/* Estamos indicando que en pantallas 
        pequeñas use toda la pantalla (12 filas)
        Por defecto usa las configuracion para pantalla, mas pequeña.
        Es decir, que si no esta definiado el tamaño tomará la definicion de un 
        tamaño inferior
        */}
        <Grid item xs={12} sm={4}>
          {/* Tamaño es igual al 100% del view height -100 pixeles*/}
          <Card sx={{height:" calc(100vh - 100px)", }}>
            <CardHeader title="Pendientes"/>  
            <NewEntry/>
            <EntrieList status={'pending'}/>
          </Card> 
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{height:" calc(100vh - 100px)" }}>
            <CardHeader title="En progreso"/>  
            <EntrieList status={'in-progress'}/>
          </Card> 
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{height:" calc(100vh - 100px)" }}>
            <CardHeader title="Acabadas"/>  
            <EntrieList status={'completed'}/>
          </Card> 
        </Grid>
        
      </Grid>
    </Layout>
   
    
  )
}

export default HomePage;
