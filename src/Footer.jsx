import React from 'react';

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p>&copy; Copyrights 2023</p>
    </div>
  );
};

const footerStyle = {
  backgroundColor: '#001F3F', 
  color: '#fff', 
  padding: '10px',
  textAlign: 'center',
};

export default Footer;
