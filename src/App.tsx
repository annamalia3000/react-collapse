import { Collapse } from './components/Collapse/Collapse'
import './App.css'

function App() {
 

  return (
    <>
    <div className="container">
      <Collapse collapsedLabel="Open" expandedLabel="Close">
        <p>Some Text</p>
      </Collapse>

      <Collapse>
        <p>Текст по умолчанию, с кнопками "Развернуть" и "Свернуть".</p>
        <p>Текст по умолчанию, с кнопками "Развернуть" и "Свернуть".</p>
        <p>Текст по умолчанию, с кнопками "Развернуть" и "Свернуть".</p>
        <p>Текст по умолчанию, с кнопками "Развернуть" и "Свернуть".</p>
        <p>Текст по умолчанию, с кнопками "Развернуть" и "Свернуть".</p>
      </Collapse>
    </div>
      
    </>
  )
}

export default App
