import styled from 'styled-components';
import flag_en from 'imgs/flag_en.svg';
import flag_pt from 'imgs/flag_pt.svg';

const defineFlag = (language) => {
    if (language === 'pt') return flag_pt;
    return flag_en;
};

export const LanguagesContainer = styled.div`
    width: 55px;
    height: 180px;
    position: absolute;
    z-index: 10;
    right: 30px;
    top: 15px;
`;

export const CurrentLanguage = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    background-color: white;
    position: relative;
    box-shadow: 0 4px 8px 0 black;
    border-radius: 100%;
    background: ${props => `url(${defineFlag(props.language)}) no-repeat center`};
    background-size: cover;
    cursor: pointer;
    :hover {
        box-shadow: 0 6px 12px 0 black;
    }
`;

export const LanguagesSelector = styled.div`
    position: relative;
    top: 10px;
    width: 100%;
    height: 130px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 4px 8px 0 black;
`;

export const LanguageOption = styled.div`
    width: 46px;
    height: 46px;
    background-color: white;
    position: relative;
    background: ${props => `url(${defineFlag(props.language)}) no-repeat center`};
    background-size: cover;
    cursor: pointer;
    filter: ${props => props.isSelected ? 'grayscale(100%)' : 'grayscale(0%)'};
    opacity: ${props => props.isSelected ? '0.3' : '1'};
`;