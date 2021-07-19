import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from '@styles'
import Heading from '@components/Heading'
import Span from '@components/Span'

//  vertical margin between components
const vSpacing = 10

const StyledHome = styled.View`
                    padding:50px 30px;
                    `

const Title = styled(Heading)`
                margin-bottom:${vSpacing}px;
                `

const Description = styled(Span)`
                    color:${Colors.mountainMist};
                    `

const styles = StyleSheet.create({
    searchbar: {
        marginVertical: vSpacing
    }
})

module.exports = {
    StyledHome,
    Title,
    Description,
    styles
}