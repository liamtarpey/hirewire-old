import "./App.css";
import LandingPage from "./pages/Landing/Landing.js";

/**
 * Currently we only have a landing page
 * Add react-router when the time is right and we need more pages
 * @returns {Object} React component
 */
function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
