import './App.css'
import Button from './component/Button'
import Item from './component/Item'

function App() {
  return (
    <>
      <div className='flex justify-center container mx-auto bg-red-300 border border-red'>
        <p>haha</p>
      </div>

      <Button dieukien={false} content='hihi'/>
      <br/>
      <Button dieukien icon = 'mặt cười' content='hihi'/>
<Item 
image='image/anh-dep-44.jpg.webp'
text='hihi'
/>
    
    </>
  )
}

export default App
