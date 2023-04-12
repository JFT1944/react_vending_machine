// import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import {BrowserRouter, Route, Routes, NavLink }  from 'react-router-dom'


let snackList = {chips:{name:'Chips', image: 'https://marvel-b1-cdn.bc0a.com/f00000000211592/cdn.shopify.com/s/files/1/2804/5352/products/27182_Utz_7-75oz_RedHot_Chips_Bag_Front_78cbfbf8-9e99-4aed-96dd-896676767e18_1194x.jpg?v=1645651178'}, soda:{name:'Soda', image: 'https://m.media-amazon.com/images/I/81UsuY64n7L.jpg'}, candy:{name:'Candy', image: 'https://i.insider.com/6353f6f9ffcac3001876d6e5?width=700'}}


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      
   <Routes >
      <Route exact path='/' element={<VendingMachine />} /> 
      <Route exact path='/chips' element={<Snack t_o_snack={snackList.chips.name} image={snackList.chips.image}/>} /> 
      <Route exact path='/soda' element={<Snack t_o_snack={snackList.soda.name} image={snackList.soda.image}/>} /> 
      <Route exact path='/candy' element={<Snack t_o_snack={snackList.candy.name} image={snackList.candy.image}/>} /> 
      
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


{/* <VendingMachine /> */}
{/* <Snack t_o_snack={snackList.chips.name} image={snackList.chips.image}/> */}
{/* <Snack t_o_snack={snackList.soda.name} image={snackList.soda.image}/>
<Snack t_o_snack={snackList.candy.name} image={snackList.candy.image}/> */}