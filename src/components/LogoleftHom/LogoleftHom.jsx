import React from 'react';
import './LogoleftHom.scss';
import logoLeft from './JmgLogoleftHom/free2.jpg';
import logoHome from './JmgLogoleftHom/free2.jpg';
import { Link } from 'react-router-dom'
const logoleftHom = () => {
  return( 
    <div className='logoleftHom'>
<img src={logoLeft} alt="logoLeft" className='logoleftHomJpg'/>
<Link to= "/" className='linkHom'>
<img src={logoHome} alt="logoHome" className='logoleftHomJpg' />

</Link>
</div>

  )
  
};

export default logoleftHom;