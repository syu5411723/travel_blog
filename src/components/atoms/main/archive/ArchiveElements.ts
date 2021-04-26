import styled from "styled-components"
import {motion} from "framer-motion"

export const ArchiveTitle = styled(motion.h3)`
    text-align:center;
    margin:30px 0;
    transition:all 1s;

`
export const ArchveInner = styled.div`
    border-top:1px solid #333;
`
export const ArchiveCnt = styled(motion.p)`
    padding:16px;
    cursor: pointer;
    transition:all 0.5s;
    opacity: ${(props) => props.inView ?  "1": "0"};
    transform: ${(props) => props.inView ? "transformX(0px)" : "transformX(-200px)"}
`