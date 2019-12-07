import React from 'react';
import PropTypes from 'prop-types';

import { animateIcon } from 'common/animations';
import { MenuItemStyled } from './styles';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.icon = React.createRef();
  }

  render() {
    const { icon } = this.props;
    return (
      <MenuItemStyled onMouseEnter={() => animateIcon(this.icon)}>
        <div className="icon-container" ref={(elem) => { this.icon = elem; }}>
          <i className={`fa fa-${icon}`} />
        </div>
      </MenuItemStyled>
    );
  }
}

MenuItem.propType = {
  icon: PropTypes.string.isRequired,
};

export default MenuItem;
