import React from 'react';
import { withTranslation } from 'react-i18next';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import Timeline from './Timeline/index';
import { ContentSection } from 'common/style';


const Experience = ({ t }) => (
    <ContentSection>
		<Title title={t('SECTION_EXPERIENCE_TITLE')} />
        <Paragraph firstParagraph={true}>
            {t('SECTION_EXPERIENCE_PARAGRAPH1')}
        </Paragraph>
        <Timeline />
    </ContentSection>
);
  
export default withTranslation()(Experience);
