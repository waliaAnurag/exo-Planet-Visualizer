import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import Header from "./Components/header/header";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App
