import styled from 'styled-components';
import colors from 'common/colors';
import definitions from 'common/definitions';


export const TimelineStyled = styled.div`
    width: 70%;
    max-width: ${definitions.MAIN_SECTION_MAX_WIDTH}px;
    margin: auto;
    margin-top: 30px;
`;

export const YearMark = styled.div`
    border: 2px solid ${colors.borders};
    border-radius: 100%;
    width: ${definitions.YEAR_MARK_SIZE}px;
    height: ${definitions.YEAR_MARK_SIZE}px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background-color: black;
    color: white;
`;
