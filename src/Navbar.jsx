import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <h3>LOGO</h3>
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle1}>Login</button>
        <button style={buttonStyle2}>Sign Up</button>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#001F3F', 
  padding: '10px 15px',
  color: '#fff', 
};

const logoStyle = {
  marginRight: '10px', 
};



const buttonContainerStyle = {
  display: 'flex',
};

const buttonStyle2 = {
  marginLeft: '10px', 
  padding: '8px 15px',
  background: '#FFFFFF', 
  color: '#000000', 
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonStyle1 = {
    marginLeft: '10px', 
    padding: '8px 15px',
    background: '#001F3F', 
    color: '#fff', 
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

export default Navbar;
