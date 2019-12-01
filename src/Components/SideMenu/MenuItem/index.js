import React from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

import { MenuItemStyled } from './styles';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.animateIcon = this.animateIcon.bind(this);
    this.icon = React.createRef();
  }

  animateIcon() {
    const tl = gsap.timeline();
    tl.to(this.icon, 0.2, { rotation: -20 });
    tl.to(this.icon, 0.2, { rotation: 20 });
    tl.to(this.icon, 0.2, { rotation: 0 });
    tl.resume();
  }

  render() {
    const { icon, option } = this.props;
    return (
      <MenuItemStyled onMouseEnter={() => this.animateIcon()}>
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
