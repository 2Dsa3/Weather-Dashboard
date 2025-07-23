import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

interface AlertConfig {
  description: string;
  type?: 'success' | 'warning' | 'info' | 'error';
}

const AlertUI = (config: AlertConfig) => {
  const getSeverity = () => {
    if (config.description.toLowerCase().includes('alta')) return 'warning';
    if (config.description.toLowerCase().includes('error')) return 'error';
    if (config.description.toLowerCase().includes('normal')) return 'success';
    return 'info';
  };

  const getIcon = () => {
    const severity = getSeverity();
    switch (severity) {
      case 'warning': return <WarningIcon />;
      case 'success': return <CheckCircleIcon />;
      case 'error': return <WarningIcon />;
      default: return <InfoIcon />;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Alert 
        severity={getSeverity()} 
        variant="filled"
        icon={getIcon()}
        sx={{ 
          borderRadius: 2,
          fontWeight: 'medium'
        }}
      >
        <AlertTitle sx={{ fontWeight: 'bold' }}>
          Estado del Clima
        </AlertTitle>
        {config.description}
      </Alert>
    </Box>
  );
};

export default AlertUI;