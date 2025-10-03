import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SidebarMenu() {
  return (
<Menu vertical style={{ height: '100vh', padding: '1rem', paddingTop: "21vh", background: '#ffffffff' }}>      
    
        <h1>John Thomas</h1>
      <Menu.Item as={Link} to="/">About</Menu.Item>
      <Menu.Item as={Link} to="/cv">CV + Resume</Menu.Item>

      <Dropdown item text="Selected Works">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/works/nature">Nature</Dropdown.Item>
          <Dropdown.Item as={Link} to="/works/portraiture">Portraiture</Dropdown.Item>
          <Dropdown.Item as={Link} to="/works/drone">Drone</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}