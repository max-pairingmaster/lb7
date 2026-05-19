import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // ⚠️ ПОМИЛКА ЛІНТЕРА: Невикористана змінна (ESLint завалить збірку)
  const unusedVariable = "Ця змінна ніде не використовується і завалить lint екшен";

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        
        {/* ⚠️ ПОМИЛКА БІЛДУ: Звернення до неіснуючої змінної (Vite завалить build екшен) */}
        <p>Помилка компіляції: {nonExistentVariable}</p>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
