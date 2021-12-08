import { useRef, useEffect, useState } from 'react'
import { getColorFromURL } from 'rn-dominant-color'
import { Colors } from '@styles/color'

/**
 * Hook for mount status
 * @return {boolean}
 */
const useIsMounted = () => {
    const isMounted = useRef(false)

    /**
     * Check status of mount (Is Mounted/ Not Mounted)
     * @return {function}
     */
    useEffect(() => {
        isMounted.current = true
        return () => isMounted.current = false
    }, [])

    return isMounted
}

/**
 * Hook for getting background color based on image
 */
const useBgColor = (image) => {
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
        }).catch(error => {
            console.log(error)
            // throw error
        })
    }

    /**
     * Call getBgColor on mount/availability of image prop
     * @return {void}
     */
    useEffect(() => {
		let isRun = true
		isRun && getBgColor(image)

		return () => {
			isRun = false
		}
    }, [image])

    return {
        color
    }
}

module.exports = {
    useIsMounted,
    useBgColor
}