import React from 'react';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import { ContentSection } from 'common/style';
import { SliderWrapper } from './styles';
import SliderItem from './SliderItem';
import SliderArrow from './SliderArrow';
import definitions from 'common/definitions';

const sliderSettings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow direction="left" />,
    nextArrow: <SliderArrow direction="right" />,
    responsive: [
        {
            breakpoint: definitions.SMALL_DEVICES_MIN_WIDTH,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
};

const Projects = ({ t }) => (
    <ContentSection>
        <Title title="Projetos" />
        <Paragraph firstParagraph={true}>
            {t('SECTION_PROJECTS_PARAGRAPH1')}
        </Paragraph>
        <Paragraph>
            {t('SECTION_PROJECTS_PARAGRAPH2')}
        </Paragraph>
        <SliderWrapper>
            <Slider {...sliderSettings}>
                <SliderItem project="Tronwallet" />
                <SliderItem project="99 Leads" />
                <SliderItem project="Droz" />
                <SliderItem project="CST - TOTVS" />
                <SliderItem project="Onfo" />
                <SliderItem project="Simon Game" />
                <SliderItem project="React Shapes" />
                <SliderItem project="Github Pages" />
            </Slider>
        </SliderWrapper>
    </ContentSection>
);

export default withTranslation()(Projects);
