import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';



function App() {



  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/customers/:id" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  );

  // return (
  //   <div className="App">
  //     <h1>Hello</h1>
  //     {
  //       globalStore.customers.map((customer) => {
  //         return (
  //           <ul>
  //             <li key={customer._id}>
  //               {customer.Name}
  //             </li>
  //           </ul>
  //         )
  //       })
  //     }
  //   </div>
  // )
}

export default App;
