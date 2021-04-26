import React from 'react'
import Detail from './Detail'
import { RightContainer, RightTitle,RightInfo, RightImg, RightMore,RightText } from "./RigthElements"
import { useInView } from "react-intersection-observer"


// interface Porps = { inView: boolean}


const Right = ({img}) => {
    const [ref, inView]  = useInView({
        threshold:0,
    });
    return (
            <RightContainer ref={ref}  >
                <RightTitle>タイトル</RightTitle>
                <RightInfo>
                    <p>2021/01/01</p>
                    <p>カテゴリ1</p>
                </RightInfo>
                <RightImg src={img} alt="Content Image"/>
                <RightText>テキストテキストテキストテキストテキストテキストテキストテキスト</RightText>
                <Detail />
            </RightContainer>
    )
}

export default Right