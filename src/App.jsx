import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Layout/Nav";

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen flex justify-center items-center bg-black text-white">
        <Nav />
        <AppRouter />
      </main>
    </Router>
  );
}

export default App;
