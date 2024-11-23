import { useContext, useState } from 'react'
import Navbar from './component/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import SoftDrink from './component/SoftDrink'
import Purchace from './component/Purchace'
import Chocolate from './component/Chocolate'
import Biscuit from './component/Biscuit'
import { createContext } from 'react'
import ThankYouCard from './component/ThankYouCard'


export  const context=createContext({})

function App() {

const [purchase, setPurchase]=useState({})

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"/home",
      element:<><Home/></>
    },
    {
      path:"/softDrink",
      element:<><SoftDrink/></>
    },
    {
      path:"/purchace/:productName",
      element:<><Purchace/></>
    },
    {
      path:"/chocolate",
      element:<><Chocolate/></>
    },
    {
      path:"/biscuit",
      element:<><Biscuit/></>
    },
    {
      path:"/ThankYouCard",
      element:<><ThankYouCard/></>
    },
    
  ])

  return (
    <>
    

<context.Provider  value={[purchase, setPurchase]}>
<RouterProvider router={router} />
</context.Provider>
     


      

      
    </>
  )
}

export default App
