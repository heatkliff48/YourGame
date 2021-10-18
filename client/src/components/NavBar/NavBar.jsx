import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delUser } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = localStorage.getItem('name');
  const toggle = () => setIsOpen(!isOpen);
  const dicpatch = useDispatch();
  const history = useHistory();
  let session = true;
  useEffect(() => {
    if (userName) {
      history.push('/');
      return !session;
    } else {
      history.push('/test');
      return session;
    }
  }, [session]);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Своя игра</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {session ? (
                <Link to="/test"> Регистрация </Link>
              ) : (
                <Link onClick={() => dicpatch(delUser(userName))} to="/test">
                  Logout
                </Link>
              )}
            </NavItem>
          </Nav>
          <NavbarText>Имя юзера</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
