import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { animateIcon } from 'common/animations';
import { changeScreen } from 'actions/menu';
import { MenuItemStyled } from './styles';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.icon = React.createRef();
  }

  render() {
    const { icon, changeScreen, screenId } = this.props;
    return (
      <MenuItemStyled
        onMouseEnter={() => animateIcon(this.icon)}
        onClick={() => changeScreen(screenId)}
      >
        <div className="icon-container" ref={(elem) => { this.icon = elem; }}>
          <i className={`fa fa-${icon}`} />
        </div>
      </MenuItemStyled>
    );
  }
}

MenuItem.propType = {
	icon: PropTypes.string.isRequired,
	screenId: PropTypes.string.isRequired,
	changeScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
	changeScreen,
}, dispatch);

export default connect(null, mapDispatchToProps)(MenuItem);
