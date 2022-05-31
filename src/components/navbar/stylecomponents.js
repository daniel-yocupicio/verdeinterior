import styled from "styled-components";

export const BigContainer = styled.div`
  width: 100%;
  height: 400px; 
  background-color: #D5F5E3; 
  position: fixed;
`;

export const SmallContainer = styled.div` 
  width: 100%;
  height: 100px; 
  background-color: #D5F5E3; 
  position: fixed;
`;

export const Menuitem = styled.a`
  margin: 1em;
  padding: 1em;
  &:hover {
    background-color: #7DCEA0;
    color: #fff;
  }
`;

export const SmallMenuitem = styled.a`
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 1em;
  &:hover {
    background-color: #7DCEA0;
    color: #fff;
  }
`;

export const BigButtonsContainer = styled.div`
  margin-top: 100px;
  flex: 1;
  flex-direction: row;
`;

export const SmallButtonsContainer = styled.div`
  margin-top: 35px;
  flex: 1;
  flex-direction: row;
  margin-left: 200px;
`;

export const AccountIconContainer = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
  color: #0B5345;
  &:hover {
    color: #138D75;
  }
`;

export const Logo = styled.img``;