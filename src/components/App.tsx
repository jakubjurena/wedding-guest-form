import './App.css'
import { TextAreaInput } from './TextAreaInput'
import { TextInput } from './TextInput'

function App() {
  return (
    <>
      <h1>Mock Form</h1>

      <div className="demo-container">
        <TextInput id='test-text-input' label='Test text'/>
        <TextInput id='test-text-input-2' label='Test text 2'/>
        <TextAreaInput id='test-text-area-input' label='Test text area' cols={1}/>
      </div>
    </>
  )
}

export default App
