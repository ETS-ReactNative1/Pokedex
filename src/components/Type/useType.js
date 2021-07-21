import React from 'react'

import BugIcon from '@assets/types/bug.svg'
import DarkIcon from '@assets/types/dark.svg'
import DragonIcon from '@assets/types/dragon.svg'
import ElectricIcon from '@assets/types/electric.svg'
import FairyIcon from '@assets/types/fairy.svg'
import FightingIcon from '@assets/types/fighting.svg'
import FireIcon from '@assets/types/fire.svg'
import FlyingIcon from '@assets/types/flying.svg'
import GhostIcon from '@assets/types/ghost.svg'
import GrassIcon from '@assets/types/grass.svg'
import GroundIcon from '@assets/types/ground.svg'
import IceIcon from '@assets/types/ice.svg'
import NormalIcon from '@assets/types/normal.svg'
import PoisonIcon from '@assets/types/poison.svg'
import PsychicIcon from '@assets/types/psychic.svg'
import RockIcon from '@assets/types/rock.svg'
import SteelIcon from '@assets/types/steel.svg'
import WaterIcon from '@assets/types/water.svg'

import { FontSize } from '@styles/typography'

const useType = () => {
    /**
     * Returns svg icon based on type
     * @param  {string} type
     * @return {component} svg
     */
    const getIcon = (type) => {
        let TypeIcon

        switch (type) {
            case 'Bug':
                TypeIcon = BugIcon
                break
            case 'Dark':
                TypeIcon = DarkIcon
                break
            case 'Dragon':
                TypeIcon = DragonIcon
                break
            case 'Electric':
                TypeIcon = ElectricIcon
                break
            case 'Fairy':
                TypeIcon = FairyIcon
                break
            case 'Fighting':
                TypeIcon = FightingIcon
                break
            case 'Fire':
                TypeIcon = FireIcon
                break
            case 'Flying':
                TypeIcon = FlyingIcon
                break
            case 'Ghost':
                TypeIcon = GhostIcon
                break
            case 'Grass':
                TypeIcon = GrassIcon
                break
            case 'Ground':
                TypeIcon = GroundIcon
                break
            case 'Ice':
                TypeIcon = IceIcon
                break
            case 'Normal':
                TypeIcon = NormalIcon
                break
            case 'Poison':
                TypeIcon = PoisonIcon
                break
            case 'Psychic':
                TypeIcon = PsychicIcon
                break
            case 'Rock':
                TypeIcon = RockIcon
                break
            case 'Steel':
                TypeIcon = SteelIcon
                break
            case 'Water':
                TypeIcon = WaterIcon
                break
        }

        //  store in variable TypeIcon
        //  to set avoid duplication width and style value (s)
        return <TypeIcon
            width={FontSize.regular}
            style={{ marginRight: 10 }} />
    }

    return {
        getIcon
    }
}

export default useType