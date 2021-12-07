import styled from 'styled-components/native'
import Span from '@components/Span'
import {Colors, FontSize} from '@styles'

const StyledView = styled.View`
				flex:1;
				margin:0 30px;
			`

const TabsWrapper = styled.View`
					flex-direction:row;
					align-items:center;
					justify-content:center;
					margin-bottom:${FontSize.regular*1.5}px;
					`

module.exports = {
	StyledView,
	TabsWrapper
}