import React from 'react';
import PropTypes from 'prop-types';

import { ProjectMediaWrapper, Media, Description } from './style';

const ProjectMedia = ({ src, description, height, onClick }) => (
    <ProjectMediaWrapper height={height}>
        <Media src={src} height={height} onClick={onClick} />
        <Description>
            <b>{description}</b>
        </Description>
    </ProjectMediaWrapper>
);

ProjectMedia.propType = {
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    height: PropTypes.number
};


export default ProjectMedia;