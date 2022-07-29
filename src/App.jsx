
import './App.css'
import CardCountry from './components/CardCountry'

function App() {
  
 

  return (
    <div className="App">
      <CardCountry countryName='mexico'/>
      <CardCountry countryName='colombia'/>
      <CardCountry countryName='chile'/>
      <CardCountry countryName='argentina'/>
      <CardCountry countryName='paraguay'/>
    </div>
  )
}

export default App
