import styled from "styled-components"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"



export const Container = styled(motion.div)`
    display:flex;
    align-items:center;
    margin-left: 15px;
    padding:20px 0 25px 0;
` 
export const LogoImg = styled.img`
    width:25%;
`

export const NavContainer = styled(motion.div)`
    background-color:#333;
    height: 40px;
    width:100%;

`
export const NavInner = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:72%;
    height:100%;
    margin-left: 15px;
`
export const Items = styled(motion.div)`
    
`
export const Links = styled(Link)`
    color:#fff;
    text-decoration:none;
    font-size: 14px;
`

