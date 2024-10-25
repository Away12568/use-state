import React from 'react'
import "./App.css"
import { useState } from 'react'



const App = () => {

      const[num, setNum] = useState(0)
      const[text, setText] = useState('')
      const [img, setimg] = useState (false)
      const [open, setopen] = useState("открыть")
      

      const change = () => {
        setimg(!img)
        setopen(img ? "открыть" : "закрыть")
      }
    


  return (
    <>


    <div className="box">
      <button onClick={change}> {open} фото </button>

      {img &&  <img src="https://www.ferra.ru/imgs/2021/11/13/07/5023313/8437c73dce080d917ad4f4f3e097cb3d9c53ceb4.jpeg" alt="" />}
     
    </div>

      <div className="box">
          <h4>{text}</h4>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

      </div>


      <div className="box">
              <h4>{num}</h4>
        
       
        <button  onClick={() => setNum(num + 1)}   >добавить число</button>

        <button  onClick={() => setNum(num - 1)}   >уменьши  число</button>

        <button  onClick={() => setNum(num * 2)}   >умножить  число на 2</button>

        <button  onClick={() => setNum(num / 2)}   >разделить  число на 2</button>

        <button  onClick={() => setNum(num * 0)}   >  обнулить</button>

      </div>

   
    </>
  )
}

export default App
