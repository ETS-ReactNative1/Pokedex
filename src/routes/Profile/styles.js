import styled from 'styled-components/native'
import { Colors, FontSize } from '@styles'
import Heading from '@components/Heading'
import Type from '@components/Type'

const View = styled.View`
            background-color:${Colors.white};
            height:100%;
            width:100%;
            `

const Header =styled.View`
			${({isHide}) => isHide?'display:none;':''}
			`

const Name = styled(Heading)`
            text-align:center;
			margin:${FontSize.regular*1.5}px 0;
            `

const Types = styled.View`
				flex-direction:row;
				max-width:400px;
				margin:0 auto;
				`

const StyledType = styled(Type)`
                    margin-right:10px;
                    `

module.exports = {
	Header,
    Name,
    View,
	Types,
	StyledType
}