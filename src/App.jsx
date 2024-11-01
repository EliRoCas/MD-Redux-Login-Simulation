import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import MainLayout from "./layout/Layout";
import PrivateRoute from "./routes/PrivateRoutes";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>

          <Route path="/" element={<PrivateRoute> <Home /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
          <Route path="/results" element={<PrivateRoute> <Results/></PrivateRoute>} />
          <Route path="/users" element={<PrivateRoute> <Users /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
