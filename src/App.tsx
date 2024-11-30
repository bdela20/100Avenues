import { HashRouter, Route, Routes } from 'react-router-dom';
// import './app.css' 
import routes from './config/routes';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <HashRouter>
      {/* Render Navbar */}
      <Navbar />

      {/* Render your Routes */}
      <Routes>
        {routes.map((route: any, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>

      {/* Render Footer on every page */}
      <Footer />
    </HashRouter>
  );
}

export default App;
