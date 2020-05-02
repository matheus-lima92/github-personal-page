import React from 'react';
import { withTranslation } from 'react-i18next';

import Resume from 'files/Resume.pdf';
import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import Button from 'Components/common/Button';
import { ContentSection } from 'common/style';
import { SocialMediaWrapper, SocialMedia, ButtonWrapper } from './styles';

const Contact = ({ t }) => (
    <ContentSection>
		<Title title={t('SECTION_CONTACT_TITLE')} />
        <Paragraph firstParagraph={true}>
            {t('SECTION_CONTACT_PARAGRAPH1')}
        </Paragraph>
        <Paragraph>
            {t('SECTION_CONTACT_PARAGRAPH2')}
        </Paragraph>
        <SocialMediaWrapper>
            <SocialMedia media="linkedin" onClick={() => window.open('https://www.linkedin.com/in/matheus-lima-923501a8/', '_blank')}/>
            <SocialMedia media="github" onClick={() => window.open('https://github.com/matheus-gomes-dev', '_blank')} />
        </SocialMediaWrapper>
        <ButtonWrapper>
            <a href={Resume} download="Matheus_Gomes_Resume.pdf">
                <Button label={t('SECTION_CONTACT_BUTTON_LABEL')} width={220} onClick={() => {return;}}/>
            </a>
        </ButtonWrapper>
    </ContentSection>
);
  
export default withTranslation()(Contact);
