import React, { useState, useEffect } from 'react'
import { getColorFromURL } from 'rn-dominant-color'
import { Colors } from '@styles/color'

const usePokemonCard = (image) => {
    const defaultColor = Colors.mountainMist

    const [color, setColor] = useState(defaultColor)

    const getBgColor = (imageURL) => {
        getColorFromURL(imageURL).then(colors => {
            setColor(colors.primary)
        })
    }

    useEffect(() => {
        getBgColor(image)
    }, [image])

    return {
        color
    }
}

export default usePokemonCard