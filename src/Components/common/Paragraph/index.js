import React from 'react';

import { ParagraphStyled } from './styles';

const Paragraph = (props) => (
    <ParagraphStyled>
        {props.children}
    </ParagraphStyled>
);

export default Paragraph;
