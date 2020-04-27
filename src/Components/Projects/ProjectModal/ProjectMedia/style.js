import styled from 'styled-components';
import colors from 'common/colors';
import projectMedia from 'common/projectMedia';

export const ProjectMediaWrapper = styled.div`
    margin: auto;
    width: 90%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const Media = styled.div`
    width: 100%;
    height: 100px;
    background: ${props => `url(${projectMedia(props.src)}) no-repeat center`};
    background-size: cover;
    border: 1px solid ${colors.tinyBorders};
    cursor: pointer;
`;

export const Description = styled.div`
    width: 90%;
    text-align: center;
    font-style: italic;
    font-size: 13px;
`