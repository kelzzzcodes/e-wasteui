import {React,useState} from 'react'
import {Link} from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
const Header = () => {
  const [burgerStatus,  setBurgerStatus] =useState(false);
  return (
    <div>
      <div className=" flex justify-between items-center p-5 shadow-md shadow-gray-300">
        <div className='cursor-pointer text-green-600'><a href="#">KELzzzWaste</a></div>
        <ul className='hidden md:flex justify-between items-center space-x-10 mr-10 '>
            <li className='cursor-pointer hover:text-green-600'>Home</li>
            <li className='cursor-pointer hover:text-green-600'>
              <Link to='AboutUs' smooth={true} duration={500}> About Us</Link>
              </li>
            <li className='cursor-pointer hover:text-green-600'>
            <Link to='Services' smooth={true} duration={500}> Services</Link>
            </li>
            <li className='cursor-pointer hover:text-green-600 bb-yellow'>
            <Link to='Process' smooth={true} duration={500}> Process</Link>
            </li>
            <li className='cursor-pointer hover:text-green-600 bb-yellow'>Contact us</li>
            <li className='cursor-pointer hover:text-green-600 bb-yellow'>Login</li>

        </ul>
        <div className='flex md:hidden display-none cursor-pointer text-green-600'>
        <MenuIcon onClick={()=>setBurgerStatus(true)} />
        </div>
        <BurgerNav show={burgerStatus}>
    <CloseWrapper>
      <CustomClose  onClick={()=>setBurgerStatus(false)}/>
    </CloseWrapper>
    
    
      <li><a className='cursor-pointer hover:text-green-600'>Home</a></li>
      <li className='cursor-pointer hover:text-green-600'>
        <Link to='AboutUs' smooth={true} duration={500}> About Us</Link>
        </li>
        <li className='cursor-pointer hover:text-green-600'>
        <Link to='Services' smooth={true} duration={500}> Services</Link>
        </li>
        <li><a className='cursor-pointer hover:text-green-600 bb-yellow'>Process</a></li>
     
      <li><a className='cursor-pointer hover:text-green-600 bb-yellow'>Contact us</a></li>
      <li><a className='cursor-pointer hover:text-green-600 bb-yellow'>Login</a></li>
     
    </BurgerNav>
        
      </div>
    </div>
  )
}

export default Header

const BurgerNav= styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${props => props.show ? 'translatX(0)' : 'translateX(100%)'};
  transition : transform 0.2s ;
  li{
    padding:15px 0px;
    border-bottom:1px solid rgba(0,0,0,.2);
    
  }
  a{
    font-weight:600px;
  }
  
`

const CustomClose=styled(CloseIcon)`
  cursor:pointer;
`

const CloseWrapper=styled.div`
  display:flex;
  justify-content:flex-end;
  
`