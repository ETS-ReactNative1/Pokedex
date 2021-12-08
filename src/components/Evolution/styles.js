import styled from 'styled-components/native'
import Span from '@components/Span'
import {FontSize, Colors} from '@styles'
import ArrowIcon from '@assets/icons/to-arrow.svg'


const StyledEvolution = styled.View`
						flex-direction:row;
						align-items:center;
						justify-content:space-between;
					`

const Image = styled.Image`
						height:${FontSize.regular*6}px;
						aspect-ratio:1;
					`
			
const StyledArrow = styled(ArrowIcon)`
						flex:1;
					`

const Name = styled(Span)`
						text-align:center;
					`

module.exports = {
	StyledEvolution,
	StyledArrow,
	Image,
	Name
}