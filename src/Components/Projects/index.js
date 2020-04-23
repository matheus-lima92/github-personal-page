import React from 'react';
import Slider from 'react-slick';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import { ContentSection } from 'common/style';
import { SliderLeftArrow, SliderRightArrow, SliderWrapper } from './styles';
import SliderItem from './SliderItem';

const SliderArrow = ({ onClick, direction }) => {
    if (direction === 'left') return (
        <SliderLeftArrow onClick={onClick}>
            <div className="icon-container">
                <i className={`fa fa-chevron-left`} />
            </div>
        </SliderLeftArrow>
    );
    return (<SliderRightArrow onClick={onClick}>
        <div className="icon-container">
            <i className={`fa fa-chevron-right`} />
        </div>
    </SliderRightArrow>);
}

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
                <SliderItem>item 1</SliderItem>
                <SliderItem>item 2</SliderItem>
                <SliderItem>item 3</SliderItem>
                <SliderItem>item 4</SliderItem>
                <SliderItem>item 5</SliderItem>
                <SliderItem>item 6</SliderItem>
                <SliderItem>item 7</SliderItem>
                <SliderItem>item 8</SliderItem>
            </Slider>
        </SliderWrapper>
    </ContentSection>
);

export default Projects;
