import React from 'react'

import { NavContainer,NavInner, Items, Links } from "./HeaderElement"

const navV = {
    hidden:{opacity:0},
    visible:{opacity:1},
}
const innerV = {
    hidden:{},
    visible:{transition:{staggerChildren: 0.08, delayChildren: 0.2}}
}
const itemV = {
    hidden:{opacity:0, x:-100},
    visible:{opacity:1, x:0},
}

const HeaderNav = () => {
    return (
        <>
            <NavContainer
            variants={navV}
            initial="hidden"
            animate="visible"
            >
                <NavInner
                variants={innerV}
                >
                    <Items variants={itemV}>
                        <Links to="/">NEWS</Links>
                    </Items>
                    <Items variants={itemV}>
                        <Links to="/">COLUMN</Links>
                    </Items>
                    <Items variants={itemV}>
                        <Links to="/">SERIES</Links>
                    </Items>
                    <Items variants={itemV}>
                        <Links to="/">Q&A</Links>
                    </Items>
                    <Items variants={itemV}>
                        <Links to="/">CONTACT</Links>
                    </Items>
                </NavInner>
            </NavContainer>
        </>
    )
}

export default HeaderNav
