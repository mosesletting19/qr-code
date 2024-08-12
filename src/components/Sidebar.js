import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 0;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #444;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/scanner">Scanner</SidebarLink>
      <SidebarLink to="/form">Form</SidebarLink>
      <SidebarLink to="/other">Other</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
