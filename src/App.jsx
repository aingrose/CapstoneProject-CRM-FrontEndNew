
import { Route, Routes, BrowserRouter,  } from 'react-router-dom';
import './App.css'
import Register from './Components/Register'
import Main from './Components/Main';
import { useState } from 'react';
import Table from './Components/Table';
import { ContactUs } from './Components/ContactUs';
import NewRegister from './Components/NewRegister';
import Login from './Components/Login';
import NewMail from './Components/NewMail';
import {createContext } from 'react';





const Context = createContext();



function App() {




  const [mail, setMail] = useState("hello");

  console.log(mail);

  let handleContact = (email) => {
    
    setMail(email);
    console.log(email)
   

 
  
  };

  return (

    <Context.Provider value={{mail,setMail}}>
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/table' element={<Table handleContact={handleContact} />} />
        <Route path='/create' element={<NewRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/Mail' element={<NewMail mail={mail} />} />
        <Route path='/register' element={<Register  />} />
        <Route path='/newregister' element={<NewRegister  />} />
      </Routes>
    </BrowserRouter>

    </>
    </Context.Provider>
    
  );
}

export {App as default, Context}  ;
