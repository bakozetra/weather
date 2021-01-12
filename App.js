import React, {} from 'react'
import {Switch , Route} from 'react-router-dom'
import CountryName from './pages/CountryName'
function App() {
 return (
   <div>
     <h1> Onja Weather App</h1>
     <Switch>
       <Route>
         <CountryName/>
       </Route>
     </Switch>
   </div>
 ) 
}
export default App