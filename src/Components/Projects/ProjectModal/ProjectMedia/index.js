import React from 'react';
import PropTypes from 'prop-types';

import { ProjectMediaWrapper, Media, Description } from './style';

const ProjectMedia = ({ mediaSrc, description, onClick }) => (
    <ProjectMediaWrapper>
        <Media src={mediaSrc} onClick={onClick} />
        <Description>
            {description}
        </Description>
    </ProjectMediaWrapper>
);

ProjectMedia.propType = {
    mediaSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ProjectMedia;