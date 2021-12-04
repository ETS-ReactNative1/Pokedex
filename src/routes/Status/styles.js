import styled from 'styled-components/native'
import { Colors } from '@styles/color'
import Heading from '@components/Heading'

const View = styled.View`
            background-color:${Colors.white};
            height:100%;
            width:100%;
            `

const Name = styled(Heading)`
            text-align:center;
            `

module.exports = {
    Name,
    View
}