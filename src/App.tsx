import { useState } from 'react'
import { Grid } from '@mui/material';
import './App.css'
import HeaderUI from './Components/HeaderUI';
import AlertUI from './Components/AlertUI';

function App() {
   return (
      <Grid 
         container 
         spacing={5} 
         justifyContent="center" 
         alignItems="center"
      >

         {/* Encabezado */}
         <Grid><HeaderUI /></Grid>

         {/* Alertas */}
         <Grid 
            container 
            justifyContent="flex-end" 
            alignItems="center"
         >
            <AlertUI description="No se preveen lluvias" />
         </Grid>

         {/* Selector */}
         <Grid>Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid>Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid sx={{ display: { xs: 'none', md: 'block' } }}>Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid sx={{ display: { xs: 'none', md: 'block' } }}>Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid>Elemento: Información adicional</Grid>

      </Grid>
   );
}

export default App
