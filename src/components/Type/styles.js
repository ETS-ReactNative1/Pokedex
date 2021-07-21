import styled from 'styled-components'
import { Colors } from '@styles/color'
import Span from '@components/Span'

/**
 * Returns tag color for type
 * @param  {string} type
 * @return {string} color
 */
const getBgColor = (type) => {
    switch (type) {
        case 'Bug':
            return Colors.atlantis
        case 'Dark':
            return Colors.mildGray
        case 'Dragon':
            return Colors.lochmara
        case 'Electric':
            return Colors.goldenDream
        case 'Fairy':
            return Colors.lavenderMargenta
        case 'Fighting':
            return Colors.cabaret
        case 'Fire':
            return Colors.tanHide
        case 'Flying':
            return Colors.cornFlower
        case 'Ghost':
            return Colors.blueMarguerite
        case 'Grass':
            return Colors.fern
        case 'Ground':
            return Colors.japonica
        case 'Ice':
            return Colors.bermuda
        case 'Normal':
            return Colors.manatee
        case 'Poison':
            return Colors.amethyst
        case 'Psychic':
            return Colors.froly
        case 'Rock':
            return Colors.yuma
        case 'Steel':
            return Colors.hippieBlue
        case 'Water':
            return Colors.havelockBlue
    }
}

const StyledType = styled.View`
                    background-color:${props => getBgColor(props.type)};
                    align-self:flex-start;
                    padding:10px;
                    border-radius:5px;
                    flex-direction:row;
                    align-items:center;
                    `

const StyledText = styled(Span)`
                    color:${Colors.white};
                    text-transform:capitalize;
                    `

module.exports = {
    StyledType,
    StyledText
}