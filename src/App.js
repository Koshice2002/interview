import Login from "./pages/login";
import OTP from "./pages/otp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/otp" element={<OTP></OTP>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
