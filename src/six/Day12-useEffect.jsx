import { useState, useEffect } from 'react'

// function Example() {
//   const [countOne, setCountOne] = useState(0)
//   const [countTwo, setCountTwo] = useState(0)

//   // 相似於 componentDidMount 和 componentDidUpdate:
//   // 不論更新 countOne, countTwo 都會觸發
//   useEffect(() => {
//     console.log(`Change!!`)
//   })

//   useEffect(() => {
//     // console.log(`資料一：點擊 ${countOne} 次`)
//   }, [countOne]) // 僅更新 countOne 會觸發


//   console.log(`資料二原本：點擊 ${countTwo} 次`)
//   useEffect(() => {
//     console.log(`資料二：點擊 ${countTwo} 次`)
//   }, [countTwo]) // 僅更新 countTwo 會觸發

//   const addHandle = () => {
//     setCountOne(countOne + 1)
//   }

//   return (
//     <div>
//       <div style={{ textAlign: 'center' }}>
//         <h3>資料一</h3>
//         <p> 目前點了 {countOne} 次</p>
//         {/* 內聯 */}
//         <span>內聯</span>
//         <button onClick={() => setCountOne(countOne + 1)}>加一</button>
//         {/* 外聯 */}
//         <span>外聯</span>
//         <button onClick={addHandle}>加一</button>
//       </div>

//       <br />

//       <div style={{textAlign : "center"}}>
//         <h3>資料二</h3>
//         <p>目前點了 {countTwo} 次</p>
//         <button onClick={() => setCountTwo(countTwo + 1)}>加一</button>
//       </div>
//     </div>
//   )
// }

let num = 0;
function Example() {
  const [text , setText] = useState('curry')
  num++
  console.log('script' , num , text)
  // script 2 curry1


  useEffect(() => {
    console.log(`useEffect ${num} ${text}`)
    // useEffect 2 curry1
  }, [text] ) 

  const handlerInput = (e)=>{
    setText(e.target.value)
    //  這邊拿到的值 會是舊的
    // template: 1 curry
    console.log('template:' , num , text)
  }
  
  return (
    <div>
      {/* 這邊會拿到新值 */
        // <div>{ text }</div> 
        // value={text} 
      }
      <div>{ text }</div> 

      <p>內聯</p>
      <input type="text" value={text} onChange={ (e)=> {
        setText(e.target.value)
        //  這邊拿到的值 會是舊的
        // template: 1 curry
        console.log('template:' , num , text)
      }} />
      <p>外聯</p>
      <input type="text" value={text} onChange={ handlerInput } />
    </div>
  )
}

export default Example
