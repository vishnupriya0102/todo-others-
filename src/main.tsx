import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
// import FoodDataList from './compents/FoodDataList'
import Home from './Home'
import App from './App'
//import ExampleTodo from './compents/ExampleTodo'
//import Counter from './compents/Counter'
//import PricingCard from './compents/PricingCard'
//import Productcard from './compents/Productcard'
//import Newspage from './compents/Newspage'
//import Pinterest from './compents/Pinterest'
//import Google from './compents/Google.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FoodDataList /> */}
    <Home />
    {/* <ExampleTodo /> */}
    {/* <Counter /> */}
    {/* <PricingCard /> */}
    {/* <Newspage /> */}
{/* https://i.pinimg.com/474x/7f/63/72/7f63723c78df32803d10ed11128fb7bd.jpg */}
     {/* <Pinterest images={["https://source.unsplash.com/random/1","https://source.unsplash.com/random/2","https://source.unsplash.com/random/3"]}/>  */}
     {/* <Google />  */}
     {/* <Productcard name='Nike shoe' rating='44' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLX63MN8Zjq8l0jNYwaz_QjwEIuq0Ow0Jbag&usqp=CAU' starting_price='2000' ending_price='800'/>  */}
  </React.StrictMode>,
)