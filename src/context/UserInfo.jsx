import React, { useContext } from 'react'
import UserContext from './UserContext';
import ThemeContext from './ThemeContext';
const UserInfo = () => {
    const user = useContext(UserContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
    <br/><br/>
    <h2>Current Theme: {theme}</h2>
    <button onClick={toggleTheme}>
        Toggle Theme
    </button>
    </>
  )
}

export default UserInfo
