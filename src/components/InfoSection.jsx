import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const InfoSection = () => {
  return (
    <>
        <DropdownButton id="dropdown-item-button" title="Info">
      {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
      <Dropdown.Item as="button">HOME</Dropdown.Item>
      <Dropdown.Item as="button">ABOUT</Dropdown.Item>
      <Dropdown.Item as="button">CONTACT</Dropdown.Item>
      <Dropdown.Item as="button">LATEST ARTICLES</Dropdown.Item>
    </DropdownButton>
    </>
  )
}

export default InfoSection