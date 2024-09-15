import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Chat from "./Components/Chat/Chat";
import Faq from "./Components/Faq/Faq";
import Translator from "./Components/Translator/Translator";
import Login from "./Components/Login/Login"; // Import the Login component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is authenticated

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected routes - accessible only if user is authenticated */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/chat"
          element={isAuthenticated ? <Chat /> : <Navigate to="/" />}
        />
        <Route
          path="/translator"
          element={isAuthenticated ? <Translator /> : <Navigate to="/" />}
        />
        <Route
          path="/faq"
          element={isAuthenticated ? <Faq /> : <Navigate to="/" />}
        />
        <Route
          path="/about"
          element={isAuthenticated ? <About /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
