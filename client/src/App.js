import React from "react";
import  './index.css'
import DefineRoutes from "./routes/Routes";
import './custom.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return(
      <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <DefineRoutes />
      </>
    );
}

export default App;