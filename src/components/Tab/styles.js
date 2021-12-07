import styled from 'styled-components/native'
import Span from '@components/Span'
import {Colors, FontSize} from '@styles'

const StyledTab = styled.TouchableOpacity`
			padding:${FontSize.regular*0.8}px;
			flex:1;
			background-color:${({bgColor, isCurrent}) => isCurrent && bgColor?bgColor:Colors.white};
			border-radius:50px;
			`

const StyledSpan = styled(Span)`
					color:${({isCurrent, color}) => isCurrent?Colors.white:(color?color:Colors.black)};
					text-align:center;
				`

module.exports = {
	StyledTab,
	StyledSpan
}