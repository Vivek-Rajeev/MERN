import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../Context/ThemeContext';
import AuthContext from '../Context/AuthContext';
import languageContext from '../Context/LanguageContext';


const Home = () => {
  const navigate = useNavigate();
  const {theme,changeTheme} = useContext(ThemeContext);
  const user = useContext(AuthContext);
  const {language,changeLanguage} = useContext(languageContext);

  const handleClick=() =>{
    navigate("/about");
  }
    const message = {
      en: {
        greeting :" Heyyyy!!!"
      },
      tel:{
        greeting : "Namasthe"
      },
      tamil:{
        greeting : "vanakkam"
      }
    }
    const text = message[language]

  return (
    <div>
      <p>Language : {language}</p>
      <p>Greeting:{text.greeting}</p>
      <button onClick={()=>changeLanguage('en')}>English</button>
      <button onClick={()=>changeLanguage('tel')}>Telugu</button>
      <button onClick={()=>changeLanguage('tamil')}>Tamil</button>

      <button onClick={handleClick}>About</button>
      <h1>{theme}</h1>
      <button onClick={()=>changeTheme('dark')}>Dark</button>
      <button onClick={()=>changeTheme('light')}>Light</button>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button on onClick={()=> changeLanguage('en')}>English</button>
      <button on onClick={()=> changeLanguage('tel')}>Telugu</button>
      <button on onClick={()=> changeLanguage('tamil')}>Tamil</button>
    </div>
  )
}

export default Home