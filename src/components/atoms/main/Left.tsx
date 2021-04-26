import React from 'react'
import { LeftContainer, LeftImg, LeftText } from "./LeftElements"

const Left = ({img}) => {
    return (
        <>
            <LeftContainer>
                <LeftImg src={img} />
                <LeftText>テキストテキストテキスト</LeftText>
            </LeftContainer>
        </>
    )
}

export default Left
