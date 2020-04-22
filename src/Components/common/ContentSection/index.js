import React from 'react';
import gsap from 'gsap';

class ContentSection extends React.Component {

    constructor(props) {
        super(props);
        this.contentSection = React.createRef();
    }

    componentDidMount() {
        gsap.set(this.contentSection, { scale: 0 });
        gsap.to(this.contentSection, 1, { scale: 1 });
    }

    render() {
        return (
          <div ref={(elem) => { this.contentSection = elem; }} />
        )
    }
};

  
export default ContentSection;
