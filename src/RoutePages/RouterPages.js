import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu/menu'
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;


`

export default function RouterPages({children}){
    return(
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
        
    )
}