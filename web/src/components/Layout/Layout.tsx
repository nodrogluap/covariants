import React, { PropsWithChildren } from 'react'
import { Container as ContainerBase, Row, Col } from 'reactstrap'

import styled from 'styled-components'

import { NavigationBar } from './NavigationBar'
import { FooterContent } from './Footer'

const Container = styled(ContainerBase)``

const HeaderRow = styled(Row)`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0;
`

const HeaderCol = styled(Col)`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0;
`

const MainRow = styled(Row)``

const MainCol = styled(Col)``

const FooterRow = styled(Row)`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0;
`

const FooterCol = styled(Col)`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0;
`

export interface LayoutProps {
  wide?: boolean
}

export function Layout({ children, wide = false }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Container fluid>
        <HeaderRow noGutters>
          <HeaderCol>
            <NavigationBar />
          </HeaderCol>
        </HeaderRow>
      </Container>

      <Container fluid={wide}>
        <MainRow noGutters>
          <MainCol>{children}</MainCol>
        </MainRow>
      </Container>

      <Container fluid>
        <FooterRow noGutters>
          <FooterCol>
            <FooterContent />
          </FooterCol>
        </FooterRow>
      </Container>
    </>
  )
}