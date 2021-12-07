import styled from 'styled-components/native'
import { Colors, FontSize } from '@styles'
import Heading from '@components/Heading'
import Type from '@components/Type'

const View = styled.View`
            background-color:${Colors.white};
            height:100%;
            width:100%;
            `

const Name = styled(Heading)`
            text-align:center;
			margin-top:${FontSize.regular*1.5}px;
            `

const Types = styled.View`
				flex-direction:row;
				max-width:400px;
				margin:${FontSize.regular*1.5}px auto;
				`

const StyledType = styled(Type)`
                    margin-right:10px;
                    `

module.exports = {
    Name,
    View,
	Types,
	StyledType
}