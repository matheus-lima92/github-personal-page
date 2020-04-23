import React from 'react';
import Slider from 'react-slick';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import { ContentSection } from 'common/style';
import { SliderWrapper } from './styles';
import SliderItem from './SliderItem';
import SliderArrow from './SliderArrow';

const sliderSettings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow direction="left" />,
    nextArrow: <SliderArrow  direction="right" />,
};

const Projects = () => (
    <ContentSection>
		<Title title="Projetos" />
        <SliderWrapper>
            <Slider {...sliderSettings}>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
                <SliderItem project="99 Leads"/>
            </Slider>
        </SliderWrapper>
    </ContentSection>
);

export default Projects;
