import React, { useState, useEffect } from 'react'
import { getColorFromURL } from 'rn-dominant-color'
import { Colors } from '@styles/color'

/**
 * Hook for Pokemon Card
 * @param  {string} image
 * @return {string} color
 */
const usePokemonCard = (image) => {
    const defaultColor = Colors.mountainMist

    const [color, setColor] = useState(defaultColor)

    /**
     * Get primary/ prominent color of image
     * Set color state
     * @param  {string} imageURL
     * @return {void}
     */
    const getBgColor = (imageURL) => {
        getColorFromURL(imageURL).then(colors => {
            setColor(colors.primary)
        })
    }

    /* Call getBgColor on mount/availability of image prop */
    useEffect(() => {
        getBgColor(image)
    }, [image])

    return {
        color
    }
}

export default usePokemonCard