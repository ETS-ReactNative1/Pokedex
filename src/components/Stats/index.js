import React from 'react'
import PropTypes from 'prop-types'
import {Row, Label, Value, StyledBar} from './styles'

const Stats = ({label, value, labelColor, style}) => {
	return (
		<Row style={style}>
			<Label color={labelColor}>{label}</Label>
			<Value>{value}</Value>
			<StyledBar progress={value/255} width={null} height={16} borderRadius={50}/>
		</Row>
	)
}

Stats.propTypes ={
	label:PropTypes.string,
	value:PropTypes.number,
	labelColor:PropTypes.string,
	style:PropTypes.array
}

export default Stats