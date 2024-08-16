import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Navigate to="/home" replace />} />
               <Route path="/home" element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;
