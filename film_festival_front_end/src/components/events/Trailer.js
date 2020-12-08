import React, {useState, useEffect}from 'react';
import ReactPlayer from "react-player";

const Trailer = ({trailerLink}) => {
    if (!trailerLink)
    return (
        <p>Trailer Not Found</p>
    )
    else{
        return(
            <>
            <ReactPlayer
                url={trailerLink} />
            </>

        )
    }

}

export default Trailer;