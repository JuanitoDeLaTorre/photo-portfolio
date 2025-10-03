import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Menu
      vertical
      style={{
        height: '100vh',
        padding: '1rem',
        paddingTop: '21vh',
        background: '#ffffffff',
      }}
    >
      <h1 style={{ marginBottom: '0.1rem' }}>John Thomas</h1>
      <p style={{ color: 'grey' }}>Photographer, by nature</p>

      <Menu.Item as={Link} to="/">
        About
      </Menu.Item>
      <Menu.Item as={Link} to="/cv">
        CV + Resume
      </Menu.Item>

      <Dropdown
        item
        text="Selected Works"
        inline
        open={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/works/nature">
            Nature
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/works/drone">
            Drone
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}