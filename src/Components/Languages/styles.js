import styled from 'styled-components';
import flag_en from 'imgs/flag_en.svg';
import flag_pt from 'imgs/flag_pt.svg';

const defineFlag = (language) => {
    if (language === 'pt') return flag_pt;
    return flag_en;
}

export const LanguagesContainer = styled.div`
    width: 50px;
    height: 150px;
    background-color: white;
    position: absolute;
    z-index: 10;
    right: 30px;
    top: 30px;
    border: 1px solid red;
`

export const CurrentLanguage = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    position: relative;
    z-index: 10;
    box-shadow: 0 4px 8px 0 black;
    border-radius: 100%;
    background: ${props => `url(${defineFlag(props.language)}) no-repeat center`};
    background-size: cover;
    cursor: pointer;
    filter: grayscale(100%);
    :hover {
        box-shadow: 0 6px 12px 0 black;
    }
`