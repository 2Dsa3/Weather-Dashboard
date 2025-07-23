import { useState } from 'react';
import { Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import HeaderUI from './Components/HeaderUI';
import AlertUI from './Components/AlertUI';
import SelectorUI from './Components/SelectorUI';
import IndicatorUI from './Components/IndicatorUI';
import DataFetcher from './functions/DataFetcher';
import ChartUI from './Components/ChartUI';
import TableUI from './Components/TableUI';

const cities = [
  { value: "guayaquil", label: "Guayaquil", lat: -2.170998, lon: -79.922359 },
  { value: "quito", label: "Quito", lat: -0.180653, lon: -78.467834 },
  { value: "manta", label: "Manta", lat: -0.967653, lon: -80.708910 },
  { value: "cuenca", label: "Cuenca", lat: -2.900128, lon: -79.005896 }
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#181c20",
      paper: "#23272f"
    },
    text: {
      primary: "#fff",
      secondary: "#b0b3b8"
    }
  }
});

function App() {
   // Estado para la ciudad seleccionada
   const [selectedCity, setSelectedCity] = useState(cities[0]);

   // Pasa lat/lon a DataFetcher
   const dataFetcherOutput = DataFetcher(selectedCity.lat, selectedCity.lon);

   return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid 
         container 
         spacing={5} 
         justifyContent="center" 
         alignItems="center"
         sx={{ minHeight: "100vh", backgroundColor: "background.default", padding: 2 }}
      >

         {/* Encabezado - 12 columnas en todas las pantallas */}
         <Grid size={{ xs: 12 }}>
            <HeaderUI />
         </Grid>

         {/* Alertas - 12 columnas en todas las pantallas */}
         <Grid size={{ xs: 12 }}>
            <AlertUI description={
               dataFetcherOutput.data?.current.relative_humidity_2m && dataFetcherOutput.data.current.relative_humidity_2m > 80
                  ? "Alta humedad detectada"
                  : "Condiciones normales"
            } />
         </Grid>

         {/* Selector - 3 columnas en md+, 12 en xs */}
         <Grid size={{ xs: 12, md: 3 }}>
           <SelectorUI
             cities={cities}
             selectedCity={selectedCity}
             setSelectedCity={setSelectedCity}
           />
         </Grid>

         {/* Indicadores - 9 columnas en md+, 12 en xs */}
         <Grid container size={{ xs: 12, md: 9 }} spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
               <IndicatorUI
                  title='Temperatura (2m)'
                  description={
                     dataFetcherOutput.data
                        ? `${dataFetcherOutput.data.current.temperature_2m}°C`
                        : '--'
                  }
               />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
               <IndicatorUI
                  title='Temperatura aparente'
                  description={
                     dataFetcherOutput.data
                        ? `${dataFetcherOutput.data.current.apparent_temperature}°C`
                        : '--'
                  }
               />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
               <IndicatorUI
                  title='Velocidad del viento'
                  description={
                     dataFetcherOutput.data
                        ? `${dataFetcherOutput.data.current.wind_speed_10m} km/h`
                        : '--'
                  }
               />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
               <IndicatorUI
                  title='Humedad relativa'
                  description={
                     dataFetcherOutput.data
                        ? `${dataFetcherOutput.data.current.relative_humidity_2m}%`
                        : '--'
                  }
               />
            </Grid>
         </Grid>

         {/* Gráfico - 6 columnas en md+, oculto en xs */}
         <Grid size={{ md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
            <ChartUI
              key={selectedCity.value}
              lat={selectedCity.lat}
              lon={selectedCity.lon}
            />
         </Grid>

         {/* Tabla - 6 columnas en md+, oculta en xs */}
         <Grid size={{ md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
            <TableUI
              key={selectedCity.value}
              lat={selectedCity.lat}
              lon={selectedCity.lon}
            />
         </Grid>

         {/* Información adicional - 12 columnas */}
         <Grid size={{ xs: 12 }}>
            <IndicatorUI
               title='Información adicional'
               description={
                  dataFetcherOutput.data
                     ? `Ubicación: ${selectedCity.label} (${dataFetcherOutput.data.latitude.toFixed(2)}, ${dataFetcherOutput.data.longitude.toFixed(2)}) | Zona horaria: ${dataFetcherOutput.data.timezone}`
                     : 'Cargando información de ubicación...'
               }
            />
         </Grid>

      </Grid>
    </ThemeProvider>
   );
}

export default App;
