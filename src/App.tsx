import { useState } from 'react'
import { Grid } from '@mui/material';
import './App.css'
import HeaderUI from './Components/HeaderUI';
import AlertUI from './Components/AlertUI';
import SelectorUI from './Components/SelectorUI';
import IndicatorUI from './Components/IndicatorUI';

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
         <Grid><SelectorUI /></Grid>

         {/* Indicadores */}
         <Grid container size={{ xs: 12, md: 9 }} >

                 <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI title='Temperatura (2m)' description='XX°C' />
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI title='Temperatura aparente' description='YY°C' />
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI title='Velocidad del viento' description='ZZkm/h' />
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI title='Humedad relativa' description='NN%' />
                 </Grid>

             </Grid>

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
