import React from 'react'
import PropTypes from 'prop-types'
import {StyledTab, StyledSpan} from './styles'

const Tab = ({color, isCurrent, onPress, children}) => {
	return (
		<StyledTab bgColor={color} 
			isCurrent={isCurrent}
			onPress={onPress}>
				<StyledSpan isCurrent={isCurrent} color={color}>
					{children}
				</StyledSpan>
		</StyledTab>
	)
}

Tab.propTypes = {
	color:PropTypes.string,
	isCurrent:PropTypes.bool,
	onPress:PropTypes.func,
	children:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Tab