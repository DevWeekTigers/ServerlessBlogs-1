import { Outlet, Link } from 'react-router-dom';

import '../App.css';
// logo

import logo from '../assets/images/logo512.png'

const NavBar = () => {

  return (

    <div className="App">

      <main id="navbar">

        <img
          src={logo}

          className="App-logo"

          alt="logo"

          // onClick={() => {

          //   setSpin(!spin);

          // }}

          // spin={`${spin}`} 

        /> 
        <div className="nav-container">

          <Link to="/"><strong>Home</strong></Link>{' '}

          <Link to="/auth"><strong>Login</strong></Link>{' '}

          <Link to="/"><strong>Signup</strong></Link>{' '}

          <Link to="/user"><strong>User</strong></Link>{' '}

          <Link to="/admin"><strong>Admin</strong></Link>{' '}

          <Link to="/"><strong>Posts</strong></Link>{''}


        </div></main>

      <Outlet />

    </div>

  );

};

export default NavBar;
