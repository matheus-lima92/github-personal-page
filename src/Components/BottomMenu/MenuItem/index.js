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
    const { icon, changeScreen, screenId, option, currentScreen } = this.props;
    const isActive = currentScreen === screenId;
    return (
      <MenuItemStyled
        onMouseEnter={() => animateIcon(this.icon)}
        onClick={() => changeScreen(screenId)}
        isActive={isActive}
      >
        {isActive && <div className="item-marker" />}
        <div className="item-container">
          <div className="icon-container" ref={(elem) => { this.icon = elem; }}>
            <i className={`fa fa-${icon}`} />
          </div>
          <div className="text-container">
            <span>{option}</span>
          </div>
        </div>
      </MenuItemStyled>
    );
  }
}

MenuItem.propType = {
	icon: PropTypes.string.isRequired,
  screenId: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  changeScreen: PropTypes.func.isRequired,
  currentScreen: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentScreen: state.mainContainer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	changeScreen,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
