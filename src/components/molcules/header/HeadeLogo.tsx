import React from 'react'

import { Container,LogoImg } from "./HeaderElement"
import Logo from "../../../images/logo.svg"


const containerV = {
    hidden:{opacity:0, y:-200},
    visible:{opacity:1, y:0,transition:{
        type: "spring", stiffness:100,duration:1
    }},
}


const HeadeLogo = () => {
    return (
        <>
            <Container
            variants={containerV}
            initial="hidden"
            animate="visible"
            >
                <LogoImg src={Logo} alt="Logo Img" />

            </Container>
        </>
    )
}

export default HeadeLogo