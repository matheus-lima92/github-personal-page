import React from 'react';
import { withTranslation } from 'react-i18next';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import { ContentSection } from 'common/style';


const Contact = ({ t }) => (
    <ContentSection>
		<Title title={t('SECTION_CONTACT_TITLE')} />
        <Paragraph firstParagraph={true}>
            {t('SECTION_CONTACT_PARAGRAPH1')}
        </Paragraph>
    </ContentSection>
);
  
export default withTranslation()(Contact);
