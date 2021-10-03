import Main  from './pages/main'
import { ThemeProvider } from './context/theme'
import 'App.css';

function App() {

  return (
    <ThemeProvider>
      <Main />  
    </ThemeProvider>

  );
}

export default App;
