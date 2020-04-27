import React from 'react';
import PropTypes from 'prop-types';

import { ProjectMediaWrapper, Media, Description } from './style';

const ProjectMedia = ({ src, description, onClick }) => (
    <ProjectMediaWrapper>
        <Media src={src} onClick={onClick} />
        <Description>
            {description}
        </Description>
    </ProjectMediaWrapper>
);

ProjectMedia.propType = {
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ProjectMedia;