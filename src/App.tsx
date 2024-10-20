import './App.css'
import Button from './component/Button'

function App() {
  return (
    <>
      <div className='flex justify-center container mx-auto bg-red-300 border border-red'>
        <p>haha</p>
      </div>

      <Button dieukien={false} content='hihi'/>
      <br/>
      <Button dieukien icon = 'mặt cười' content='hihi'/>

    
    </>
  )
}

export default App
