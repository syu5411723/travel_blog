import React from 'react'
import { ArchiveTitle, ArchiveCnt, ArchveInner } from "./ArchiveElements"
import { useInView } from "react-intersection-observer"


interface Props {
    inView:boolean,
}

const Archive = () => {
    const [ref, inView] = useInView({
        threshold:0,
    });
    return (
        <>
            <ArchiveTitle>Archive</ArchiveTitle>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9,].map(() => (
                <ArchveInner>
                    <ArchiveCnt
                        ref={ref} inView={inView}
                        whileHover={{ scale: 1.1, originX: 0, transition: { duration: 0.2, } }}>
                        xxxx年xx月(xx)
                    </ArchiveCnt>
                </ArchveInner>
            ))}


        </>
    )
}

export default Archive
