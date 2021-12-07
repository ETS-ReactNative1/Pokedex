import React from 'react'
import PropTypes from 'prop-types'
import PokemonNavigator from '@navigator/PokemonNavigator'
import { Name, View, Types, StyledType } from './styles'

const Profile = ({name, types}) => {
    return (
        <View>
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
			<PokemonNavigator/>
        </View>
    )
}

Profile.propTypes = {
	name:PropTypes.string,
	types:PropTypes.arrayOf(PropTypes.string)
}

export default Profile