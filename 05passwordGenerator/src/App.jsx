import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')
  const [copyBtnText, setCopyBtnText] = useState('Copy')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let nums = "0123456789"
    let chars = "!@#$%^&*(){}[]/?|"
    if(numberAllowed) str+=nums
    if(charAllowed) str+=chars

    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword]) //setPassword is passed here for optimized approach without setPassword program will work fine.

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() // this ? for optionally selection because value can be null
    passwordRef.current?.setSelectionRange(0,10) // for seleting specific length of the password

    setCopyBtnText('Copied')
    window.navigator.clipboard.writeText(password) // only with this line of code we can copy password to clipboard but to show effect we use above code
  },[password])


  useEffect(()=>{
    setCopyBtnText('Copy')
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text-center text-4xl my-3">Password Generator</h1>
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder="Password"
            ref={passwordRef} readOnly/>
          <button className="outline-none  bg-blue-400 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}>{copyBtnText}</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" id="range" min={8} max={20} value={length} className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor='range'>Length:{length}</label>
          </div>
          <div className="items-center gap-x-1">
            <input type="checkbox" id="chkNum" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label htmlFor="chkNum">Numbers</label>
          </div>
          <div className="items-center gap-x-1">
            <input type="checkbox" id="chkChar" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=> !prev)}}/>
            <label htmlFor="chkChar">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
