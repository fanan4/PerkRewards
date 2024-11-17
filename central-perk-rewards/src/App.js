import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Sidebar from './components/Sidebar/Sidebar';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppRoutes />
        </Box>
      </Box>
    </Router> 
  );
}

export default App;
