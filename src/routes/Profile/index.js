import React from 'react'
import PropTypes from 'prop-types'
import PokemonNavigator from '@navigator/PokemonNavigator'
import { Header, Name, View, Types, StyledType } from './styles'

const Profile = ({name, types, isHideHeader}) => {
    return (
        <View>
            <Header isHide={isHideHeader}>
				<Name>
					{name}
				</Name>
				<Types>
					{
						types.map((type, ind) =>
							<StyledType key={ind}
								type={type}
							/>
						)
					}
				</Types>
			</Header>
			<PokemonNavigator/>
        </View>
    )
}

Profile.propTypes = {
	name:PropTypes.string,
	types:PropTypes.arrayOf(PropTypes.string),
	isHideHeader:PropTypes.bool
}

export default Profile