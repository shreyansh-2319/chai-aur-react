import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
    <h1 className='bg-yellow-200 text-black p-4 rounded xl mb-4'>Tailwind test</h1>  
    <Card username='Coffee' btn='Hello'/>
    <Card username='Mocha' btn='Oya'/>
    </>
  )
}

export default App
