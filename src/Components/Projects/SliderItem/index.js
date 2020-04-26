import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ItemWrapper, Item, ItemPicture, ItemDescription, ItemPictureWrapper } from './styles';
import { showProjectModal } from 'actions/projectModal';

const SliderItem = ({ project, showProjectModal }) => {
    return (
        <ItemWrapper>
            <Item onClick={() => showProjectModal(project)}>
                <ItemPictureWrapper>
                    <ItemPicture project={project} />
                </ItemPictureWrapper>
                <ItemDescription>
                    <span>
                        <b>{project}</b>
                    </span>
                </ItemDescription>
            </Item>
        </ItemWrapper>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({
	showProjectModal,
}, dispatch);

export default connect(null, mapDispatchToProps)(SliderItem);