import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Profile from "./components/profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
