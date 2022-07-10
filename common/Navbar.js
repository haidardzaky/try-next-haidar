import React, {useState, Fragment} from 'react';
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import Hamburger from 'hamburger-react'

const ButtonNav = ({buttonTitle, onClick, customStyle}) => {
  return (<button style={customStyle} className="button-nav" onClick={onClick}>{buttonTitle}</button>)
}

function Navbar() {

  const [buttonActive, setButtonActive] = useState('Produk');
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const buttonMapContent = [
    {id: 0, title: 'Produk', slugify: 'produk'},
    {id: 1, title: 'Berita', slugify: 'berita'},
    {id: 2, title: 'Promo', slugify: 'promo'},
    {id: 3, title: 'Tentang Kami', slugify: 'tentang-kami'},
    {id: 4, title: 'Hubungan Investor', slugify: 'hubungan-investor'},
    {id: 5, title: 'Bantuan', slugify: 'bantuan'},
    {id: 6, title: 'Karir', slugify: 'karir'}
  ]

  const handleRedirect = (slugify, title) => {
    console.log(slugify)
    setButtonActive(title)
  }
  return (
    <div className={`navbar sticky-nav`}>
      <div className="nav-container">
        <div>
          <Image src="/logo-aladin.webp" alt="Vercel Logo" width={120} height={53} />
        </div>
        <div className='button-list-container'>
          {
            buttonMapContent.map((item, index)=>{return (
              <div key={index}>
                <ButtonNav
                  onClick={()=>{handleRedirect(item.slugify, item.title)}} 
                  buttonTitle={item.title} 
                  customStyle={{borderBottom: buttonActive === item.title ? '2px solid blue': '2px solid transparent'}}
                />
              </div>)
              }
            )
          }
        </div>
        <div style={{display: 'flex', flexDirection:'row'}}>
          <button className="button-download-now">Download Sekarang</button>
          <button className="button-download-small">Download</button>
          <div className="hamburger-container" style={{marginLeft: 10 }}>
            <Hamburger toggled={isMobileNavOpen} toggle={setMobileNavOpen} />
          </div>
        </div>
      </div>
      <div className="nav-mobile-container">
        <div className="button-list-mobile">
          {
            isMobileNavOpen === true ? <div style={{paddingTop: 10}}>{buttonMapContent.map((item, index)=>{return (
              <div key={index}>
                <span style={{color: buttonActive === item.title ? 'blue': '#000000'}}>{buttonActive === item.title ? '->': ''}</span>
                <ButtonNav
                  onClick={()=>{handleRedirect(item.slugify, item.title)}} 
                  buttonTitle={item.title} 
                  customStyle={{color: buttonActive === item.title ? 'blue': '#000000'}}
                />     
              </div>)
              }
            )}</div> : <Fragment />
          }
        </div>
      </div>
    </div>)
}


export default Navbar