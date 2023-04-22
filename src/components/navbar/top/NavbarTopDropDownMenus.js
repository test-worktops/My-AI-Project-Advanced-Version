import React, { useContext } from 'react';
import NavbarDropdown from './NavbarDropdown';
import {
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes
} from 'routes/routes';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { flatRoutes } from 'helpers/utils';
import NavbarDropdownApp from './NavbarDropdownApp';
import NavbarDropdownPages from './NavbarDropdownPages';
import NavbarDropdownModules from './NavbarDropdownModules';
import AppContext from 'context/Context';
import SearchBox from './SearchBox';
import SearchBar from 'components/pages/landing/SearchBar';

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return (
    <>
      {/* <NavbarDropdown title="SEARCH">
        {dashboardRoutes.children[0].children.map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown> */}

      {/* <NavbarDropdown title="SEARCH"> */}
        <SearchBar/>
        {/* <NavbarDropdownApp items={appRoutes.children} /> */}
      {/* </NavbarDropdown> */}
      <NavbarDropdown title="HOW IT WORKS">
        {/* <NavbarDropdownApp items={appRoutes.children} /> */}
      </NavbarDropdown>

      <NavbarDropdown title="FREELANCER">
        {/* <NavbarDropdownPages items={pagesRoutes.children} /> */}
      </NavbarDropdown>
      {/* <NavbarDropdown title="modules">
        <NavbarDropdownModules items={modulesRoutes.children} />
      </NavbarDropdown>

      <NavbarDropdown title="documentation">
        {flatRoutes(documentationRoutes.children).map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown> */}
      <NavbarDropdown title="PRODUCTS">
        {/* <NavbarDropdownApp items={appRoutes.children} /> */}
      </NavbarDropdown>
      <NavbarDropdown title="SERVICES">
        {/* <NavbarDropdownApp items={appRoutes.children} /> */}
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;
