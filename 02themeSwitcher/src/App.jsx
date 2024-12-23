import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [themeMode, setThemeMode] = useState("light");

  //you can't use the function of lightTheme and darkTheme which are inside ThemeProvider until you will create a state
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
   document.querySelector('html').classList.remove("light", "dark")
   document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme button here */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card place here */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App
