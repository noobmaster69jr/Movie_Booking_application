
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";

function Some(){
  return <>
  <div> Hello world</div>
  </>
}
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Auth />} />
        <Route exact path="/register" />
        <Route exact path="/" element={<Some/>}/>
      </Routes>
    </Router>
  );
}

export default App;
