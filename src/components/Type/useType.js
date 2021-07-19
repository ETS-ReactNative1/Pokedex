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
    const getIcon = (type) => {
        let TypeIcon

        switch (type) {
            case 'bug':
                TypeIcon = BugIcon
                break
            case 'dark':
                TypeIcon = DarkIcon
                break
            case 'dragon':
                TypeIcon = DragonIcon
                break
            case 'electric':
                TypeIcon = ElectricIcon
                break
            case 'fairy':
                TypeIcon = FairyIcon
                break
            case 'fighting':
                TypeIcon = FightingIcon
                break
            case 'fire':
                TypeIcon = FireIcon
                break
            case 'flying':
                TypeIcon = FlyingIcon
                break
            case 'ghost':
                TypeIcon = GhostIcon
                break
            case 'grass':
                TypeIcon = GrassIcon
                break
            case 'ground':
                TypeIcon = GroundIcon
                break
            case 'ice':
                TypeIcon = IceIcon
                break
            case 'normal':
                TypeIcon = NormalIcon
                break
            case 'poison':
                TypeIcon = PoisonIcon
                break
            case 'psychic':
                TypeIcon = PsychicIcon
                break
            case 'rock':
                TypeIcon = RockIcon
                break
            case 'steel':
                TypeIcon = SteelIcon
                break
            case 'water':
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