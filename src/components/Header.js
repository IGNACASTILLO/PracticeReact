import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Header = () => {

    const {theme,handleTheme} = useContext(ThemeContext);

  return (
    <>
    <header className={theme}>
    <form>
        <fieldset>
        <label htmlFor='light'>MODO CLARO</label>
        <input type="radio" id="light" name="same" value="light"  onClick={handleTheme} checked/>
        <label htmlFor='dark'>MODO OSCURO</label>
        <input type="radio" id="dark" name="same" value="dark" onClick={handleTheme}/>
        </fieldset>
    </form>
    </header>
    </>
  )
}

export default Header