import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import PrincipalPage from './pages/PrincipalPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import NavbarComponent from './components/NavBarComponent';
import FirstExercises from "./components/exercises/FifthExercises";
import SixthExercisess from './components/exercises/SixthExercises';
import ThirdExercises from './components/exercises/ThirdExercises';
import FifthExercises from './components/exercises/FifthExercises';
import SeventhExercises from './components/exercises/SevethExercises';



const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalPage />
  },
  {
    path: "/ativ1",
    element: <FirstExercises />

  },

  {
    path: "/ativ2",
    element: <SixthExercisess />
  },
   

  {
    path: "/ativ3",
    element: <ThirdExercises />

  },
  {
    path: "/ativ4",
    element: <SeventhExercises />

  },
  {
    path: "/ativ5",
    element: <FifthExercises/> 

  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavbarComponent />
  <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
