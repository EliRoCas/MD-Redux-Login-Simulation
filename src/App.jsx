import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Layout";
import PublicRoute from "./routes/PublicRoutes";
import Login from "./pages/Login";

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
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
