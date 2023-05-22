import React from 'react'
import styled from 'styled-components'

import PageHeader from './PageHeader';
import PageNavigation from './PageNavigation';
import PageFooter from './PageFooter';

const PageContainer = styled.div`
    background-color: darkred;
    color: white;

`

const Layout = ({ children }) => {
  return (
    <>
        <PageContainer>
            <PageHeader />
            <PageNavigation />
            {children}
            <PageFooter />
        </PageContainer>
    </>
  )
}

export default Layout