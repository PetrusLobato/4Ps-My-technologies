import './App.css'
import GlobalStyle from './style/style'
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (

    <>
      <GlobalStyle/> 
      <ToastContainer autoClose={1500} theme="dark"/>
      
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  )
}

export default App
