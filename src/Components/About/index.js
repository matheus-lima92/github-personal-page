import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import { ContentSection } from 'common/style';

const About = ({ t }) => {
    return (
        <ContentSection>
            <Title title={t('SECTION_ABOUT_TITLE')} />
            <Paragraph firstParagraph={true}>
                {t('SECTION_ABOUT_PARAGRAPH1')}
            </Paragraph>
            <Paragraph>
                {t('SECTION_ABOUT_PARAGRAPH2')}
            </Paragraph>
            <Paragraph lastParagraph={true}>
                <Trans i18nKey="SECTION_ABOUT_PARAGRAPH3">
                    My first paid work related to programming was a scientific initiation project that I started in 2012, still
                    attending college, and since then I've done internships, freelancing, worked in companies inside and outside Brazil, and today I work as
                    a software engineer at <a href="https://www.bairesdev.com/" target="_blank" rel="noopener noreferrer">BairesDev</a>, which is among the fastest growing 
                    <a href="https://finance.yahoo.com/news/bairesdev-recognized-silicon-valley-top-150000742.html" target="_blank" rel="noopener noreferrer">top 10 companies</a> 
                    from Silicon Valley, United States.
                </Trans>
            </Paragraph>
        </ContentSection>
    )
};

export default withTranslation()(About);
