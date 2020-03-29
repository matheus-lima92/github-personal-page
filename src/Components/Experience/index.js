import React from 'react';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import Timeline from './Timeline/index';
import { ContentSection } from 'common/style';

const Experience = () => (
    <ContentSection>
		<Title title="Experiência" />
        <Paragraph firstParagraph={true}>
            Fiquei algum tempo pensando em uma forma, que não fosse um texto enorme e chato, para resumir meus anos
            de experiência profissional. Uma alternativa legal que encontrei foi organizar em uma timeline as experiências
            mais relevantes.
        </Paragraph>
        <Timeline />
    </ContentSection>
);

export default Experience;
