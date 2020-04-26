import React from 'react';
import PropTypes from 'prop-types';

import { ProjectMediaWrapper, Media, Description } from './style';

const ProjectMedia = ({ mediaSrc, description }) => (
    <ProjectMediaWrapper>
        <Media src={mediaSrc} />
        <Description>
            {description}
        </Description>
    </ProjectMediaWrapper>
);

ProjectMedia.propType = {
    mediaSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


export default ProjectMedia;