import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
