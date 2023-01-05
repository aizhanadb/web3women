import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-scroll";
import {IoMenuSharp} from "react-icons/io5"

const InfoSection = () => {
  const [lgShow, setLgShow] = useState(false);

  const closeMenu = () => setLgShow(false)
  return (
    <>
      {/* <button onClick={() => setLgShow(true)}><TiThMenu/></button>
       */}
       <svg className="menu-btn" onClick={() => setLgShow(true)} fill="currentColor" viewBox="0 0 44 44" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"><circle cx="7" cy="7" r="6"></circle><circle cx="22" cy="7" r="6"></circle><circle cx="37" cy="7" r="6"></circle><circle cx="7" cy="22" r="6"></circle><circle cx="22" cy="22" r="6"></circle><circle cx="37" cy="22" r="6"></circle><circle cx="7" cy="37" r="6"></circle><circle cx="22" cy="37" r="6"></circle><circle cx="37" cy="37" r="6"></circle></svg>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title> */}
        </Modal.Header>
        <Link to="home" spy={true} offset={50} onClick={closeMenu}><Modal.Body className='menu'>HOME</Modal.Body></Link>
        <Link to="about" spy={true} offset={50} onClick={closeMenu}><Modal.Body className='menu'>ABOUT</Modal.Body></Link>
        <Modal.Body className='menu'>CONTACT</Modal.Body>
        <Link to="articles" spy={true} offset={-100} onClick={closeMenu}><Modal.Body className='menu'>LATEST</Modal.Body></Link>
      </Modal>
    </>
  );
}


export default InfoSection


// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

// const InfoSection = () => {
//   return (
//     <>
//         <DropdownButton id="dropdown-item-button" title="Info">
//       {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
//       <Dropdown.Item as="button">HOME</Dropdown.Item>
//       <Dropdown.Item as="button">ABOUT</Dropdown.Item>
//       <Dropdown.Item as="button">CONTACT</Dropdown.Item>
//       <Dropdown.Item as="button">LATEST ARTICLES</Dropdown.Item>
//     </DropdownButton>
//     </>
//   )
// }

// export default InfoSection