import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloudIcon from '@mui/icons-material/Cloud';

const HeaderUI = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: 2,
      textAlign: 'center'
    }}>
      <CloudIcon sx={{ fontSize: 48, color: 'primary.main' }} />
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          fontWeight: "bold",
          background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Dashboard del Clima
      </Typography>
      <CloudIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
    </Box>
  );
};

export default HeaderUI;