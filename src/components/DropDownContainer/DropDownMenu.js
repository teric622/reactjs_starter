import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import './DropDown.css';
function DropDownMenu () {

    return (
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/"></Dropdown.Item>
    <Dropdown.Item href="/welcome-screen">welcome</Dropdown.Item>
    <Dropdown.Item href="/sign-in">Sign-in</Dropdown.Item>
    <Dropdown.Item href="/sign-up">Sign-up</Dropdown.Item>
    <Dropdown.Item href="/game-stats">GameStats</Dropdown.Item>
    <Dropdown.Item href="/donate">Donate</Dropdown.Item>
      <Dropdown.Item href="/ComputerV">Play against Computer</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    )

}


export default DropDownMenu;