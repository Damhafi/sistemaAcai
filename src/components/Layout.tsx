import React, { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyleLayout>
      <h1>Açaí do Cliente</h1>
      {children}
    </StyleLayout>
  );
};

const StyleLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  
`

export default Layout;