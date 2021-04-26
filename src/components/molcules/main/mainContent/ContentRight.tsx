import React from 'react'
import styled from "styled-components"

import Right from '../../../atoms/main/Right'
import Img01 from "../../../../images/pickup1.jpg"
import Img02 from "../../../../images/pickup2.jpg"
import Img03 from "../../../../images/pickup3.jpg"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:63%;

`
const ContentRight = () => {
    return (
        <Container>
            <Right img={Img01} />
            <Right img={Img02} />
            <Right img={Img03} />
        </Container>
    )
}

export default ContentRight
