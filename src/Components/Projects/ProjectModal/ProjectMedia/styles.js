import styled from 'styled-components';
import colors from 'common/colors';
import projectMedia from 'common/projectMedia';

export const ProjectMediaWrapper = styled.div`
    margin: auto;
    width: 90%;
`;

export const Media = styled.div`
    width: 100%;
    height: ${props => props.height || 200}px;
    background: ${props => `url(${projectMedia(props.src)}) no-repeat center`};
    background-size: cover;
    border: 1px solid ${colors.tinyBorders};
    cursor: pointer;
    margin-top: 50px;
`;

export const Description = styled.div`
    width: 90%;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 15px;
`