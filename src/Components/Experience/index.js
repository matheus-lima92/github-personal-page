import React from 'react';
import { withTranslation } from 'react-i18next';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import Timeline from './Timeline/index';
import { ContentSection } from 'common/style';


class Experience extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props;
        return (
            <ContentSection>
                <Title title={t('SECTION_EXPERIENCE_TITLE')} />
                <Paragraph firstParagraph={true}>
                    {t('SECTION_EXPERIENCE_PARAGRAPH1')}
                </Paragraph>
                <Timeline />
            </ContentSection>
        );
    }
};
  
export default withTranslation()(Experience);
