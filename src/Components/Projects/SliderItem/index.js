import React from 'react';

import { ItemWrapper, Item, ItemPicture, ItemDescription, ItemPictureWrapper } from './styles';

const SliderItem = ({ project }) => {
    return (
        <ItemWrapper>
            <Item>
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

export default SliderItem;