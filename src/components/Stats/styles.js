import styled from 'styled-components/native'
import Span from '@components/Span'
import {Colors, FontSize} from '@styles'
import {Bar} from 'react-native-progress'

const Row = styled.View`
				flex-direction:row;
				align-items:center;
			`

const Label = styled(Span)`
				font-weight:bold;
				color:${({color}) => color? color:Colors.black};
				margin-right:10px;
				text-transform:uppercase;
				min-width:${FontSize.regular*3}px;
			`
const Value = styled(Span)`
				margin-right:10px;
			`

const StyledBar = styled(Bar)`
					flex:1;
					height:${props => props.height}px;
				`

module.exports = {
	Row,
	Label,
	Value,
	StyledBar
}