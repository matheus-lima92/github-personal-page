import React from 'react';
import PropTypes from 'prop-types';

import { MenuItemStyled } from './styles';
import { animateIcon } from 'common/animations';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.icon = React.createRef();
  }

  render() {
    const { icon, option } = this.props;
    return (
      <MenuItemStyled
        onMouseEnter={() => animateIcon(this.icon)}
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
};

export default MenuItem;
