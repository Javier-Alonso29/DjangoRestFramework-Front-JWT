import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Header } from './components/Header';
import { AuthProvider } from './context/AuthContext';

function App() {
  const auth = 'not-autenticated';
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            {
              (auth === 'not-autenticated') ? (
                <>
                  <Route path="/login" element={<LoginPage />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<HomePage />} />
                </>
              )
            }
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
