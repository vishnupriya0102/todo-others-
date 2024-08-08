// import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PricingCard from './compents/PricingCard'
import Counter from './compents/Counter'
import FoodDataList from './compents/FoodDataList'
import ExampleTodo from './compents/ExampleTodo'
import Dosa from './compents/Dosa'
// import About from './compents/About'
//import Google from './compents/Google'
// import Productcard from './compents/Productcard'

export default function Home() {
  return (
      
      <BrowserRouter>
        <div>
          <nav>
            <ul className='flex flex-row gap-3 underline text-blue-300'>
              {/* <li>
                <Link to="/Product">Product Card</Link>
              </li> */}
              {/* <li>
                <Link to={"/About"}>About</Link>
              </li> */}
              <li>
                <Link to={"/food"}>FoodDataList</Link>
              </li>
              <li>
                <Link to={"/dosa"}>Eg</Link>
              </li>
              <li>
                <Link to={"/Counter"}> Counter</Link>
              </li>
              <li>
                <Link to="/PricingCard">PricingCard</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/dosa" Component={Dosa} />
          {/* <Route path="/Product" Component={Productcard}/> */}
          {/* <Route path="/About" Component={About}/> */}
          <Route path="/food" Component={FoodDataList}/>
          <Route path="/Counter" Component={Counter}/>
          <Route path="/PricingCard" Component={PricingCard}/>
      </Routes>
      </div>
      </BrowserRouter>
  )
}