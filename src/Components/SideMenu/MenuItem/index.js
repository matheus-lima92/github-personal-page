import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MenuItemStyled } from './styles';
import { animateIcon } from 'common/animations';
import { changeScreen } from 'actions/menu';

class MenuItem extends React.Component {

	constructor(props) {
		super(props);
		this.icon = React.createRef();
	}

	render() {
		const { icon, option, changeScreen, screenId } = this.props;
		return (
			<MenuItemStyled
				onMouseEnter={() => animateIcon(this.icon)}
				onClick={() => changeScreen(screenId)}
			>
				<div className="icon-container" ref={(elem) => { this.icon = elem; }}>
					<i className={`fa fa-${icon}`} />
				</div>
				<div className="option-container">
					{option}
				</div>
			</MenuItemStyled>
		);
	}
}

MenuItem.propType = {
	icon: PropTypes.string.isRequired,
	option: PropTypes.string.isRequired,
	screenId: PropTypes.string.isRequired,
	changeScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
	changeScreen,
}, dispatch);

export default connect(null, mapDispatchToProps)(MenuItem);
