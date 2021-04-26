import React from 'react'
import MainBox from '../molcules/main/MainBox'
import { MainContainer } from "./MainElements"
import  ContentRight  from "../molcules/main/mainContent/ContentRight"
import ContentLeft from '../molcules/main/mainContent/ContentLeft'

const Main = () => {
    return (
        <>
            <MainBox />
            <MainContainer>
                <ContentRight />
                <ContentLeft />
            </MainContainer>
        
        </>
    )
}

export default Main
