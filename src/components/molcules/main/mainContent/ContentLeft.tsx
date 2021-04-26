import React from 'react'
import styled from "styled-components"

import Left from '../../../atoms/main/Left'
import Img01 from "../../../../images/ranking1.jpg"
import Img02 from "../../../../images/ranking2.jpg"
import Img03 from "../../../../images/ranking3.jpg"
import ProfileImg from "../../../../images/author.jpg"
import { LeftImg, LeftName, LegtProfile, LeftRank } from "./ContentLeftElements"
import Archive from '../../../atoms/main/archive/Archive'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:32%;
`

const ContentLeft = () => {
    return (
        <Container>
            <LeftImg src={ProfileImg} 
            whileHover={{scale:1.15, transition:{ type:"spring", stiffness: 1000, duration:0.7}}}
            />
            <LeftName>Name Name</LeftName>
            <LegtProfile>プロフィールテキストテキスト</LegtProfile>
            <LeftRank>Ranking</LeftRank>
            <Left img={Img01}/>
            <Left img={Img02}/>
            <Left img={Img03}/>
            <Archive />
        </Container>
    )
}

export default ContentLeft
