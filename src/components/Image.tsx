import React from "react"

interface Props {
    className: string,
    img: {
        url: string,
        id: string,
        isFavorite: boolean
    }
}

export const Image: React.FC<Props> = () => {
    return(
        <div></div>
    )
}