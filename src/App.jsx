import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Layout";
import PublicRoute from "./routes/PublicRoutes";
import Login from "./pages/Login";
import Home from "./pages/Home"; // Importa el componente Home

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/home" 
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
