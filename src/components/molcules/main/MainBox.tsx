import React from 'react'

import img01 from "../../../images/main1.jpg"
import img02 from "../../../images/main2.jpg"
import img03 from "../../../images/main3.jpg"
import Detail from '../../atoms/main/Detail'
import { BoxContaienr, BoxCard, BoxImg, BoxText, } from "./MainBoxElements"

const MainBox = () => {

    return (
        <>
            <BoxContaienr>
                <BoxCard>
                    <BoxImg src={img01}/>
                    <BoxText>テキストテキスト</BoxText>
                    <Detail/>
                </BoxCard>
                <BoxCard>
                    <BoxImg src={img03}/>
                    <BoxText>テキストテキスト</BoxText>
                    <Detail />
                </BoxCard>
                <BoxCard>
                    <BoxImg src={img02}/>
                    <BoxText>テキストテキスト</BoxText>
                    <Detail />
                </BoxCard>
                
            </BoxContaienr>
        </>
    )
}

export default MainBox