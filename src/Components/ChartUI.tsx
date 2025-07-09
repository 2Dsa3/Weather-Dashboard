import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import DataFetcher from '../functions/DataFetcher';

export default function ChartUI() {
   const { data, loading, error } = DataFetcher();

   if (loading) {
      return <Typography>Cargando datos de la gráfica...</Typography>;
   }

   if (error || !data) {
      return <Typography color="error">Error al cargar datos de la gráfica</Typography>;
   }

   // Usar los primeros 7 datos para la gráfica
   const arrLabels = data.hourly.time.slice(0, 14);
   const arrValues1 = data.hourly.temperature_2m.slice(0, 14);
   const arrValues2 = data.hourly.wind_speed_10m.slice(0, 14);

   return (
      <>
         <Typography variant="h5" component="div">
            Temperatura y Viento (próximas horas)
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: arrValues1, label: 'Temperatura (°C)' },
               { data: arrValues2, label: 'Viento (km/h)' },
            ]}
            xAxis={[{ scaleType: 'point', data: arrLabels }]}
         />
      </>
   );
}