import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import InfoIcon from '@mui/icons-material/Info';

interface IndicatorUIProps {
   title?: string;
   description?: string;
}

export default function IndicatorUI(props: IndicatorUIProps) {
   const getIcon = () => {
      if (props.title?.toLowerCase().includes('temperatura')) {
         return <ThermostatIcon sx={{ fontSize: 32, color: 'primary.main' }} />;
      }
      if (props.title?.toLowerCase().includes('humedad')) {
         return <WaterDropIcon sx={{ fontSize: 32, color: 'info.main' }} />;
      }
      if (props.title?.toLowerCase().includes('viento')) {
         return <AirIcon sx={{ fontSize: 32, color: 'secondary.main' }} />;
      }
      return <InfoIcon sx={{ fontSize: 32, color: 'text.secondary' }} />;
   };

   return (
       <Card sx={{ 
          height: '100%',
          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 203, 243, 0.1))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
             transform: 'translateY(-4px)',
             boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)',
          }
       }}>
           <CardContent sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 1
           }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               {getIcon()}
            </Box>
            <Typography variant="h4" component="div" sx={{ 
               fontWeight: 'bold',
               color: 'primary.main'
            }}>
                {props.description}
            </Typography>
            <Typography variant="body1" component="p" color="text.secondary" sx={{
               fontWeight: 'medium'
            }}>
                {props.title}
            </Typography>
            </CardContent>
       </Card>
   )
}