import React from 'react';
import ReactPlayer from "react-player";

const Trailer = ({trailerLink}) => {

    if (!trailerLink)
    return (
        <p></p>
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