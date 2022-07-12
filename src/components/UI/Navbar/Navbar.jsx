import React from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../context";
// import MyButton from "../button/MyButton";

const Navbar = () => {
  // const { IsAuth, setIsAuth } = useContext(AuthContext);

  // const logout = () => {
  //   setIsAuth(false)
  //   localStorage.removeItem('auth')
  // }

  return (
    <div className='navbar'>
      <h1>Мои открытки</h1>
      {/* <MyButton onClick={logout}>
        Выйти
      </MyButton> */}
        <div className='navbar__link1'>
          <Link to="/posts">Альбомы</Link>
        </div>
        <div className='navbar__link2'>
          <Link to="/about">Контакты</Link>
        </div>
      </div>
  );
};

export default Navbar;