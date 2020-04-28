import styled from 'styled-components';
import colors from 'common/colors';
import projectLogo from 'common/projectLogo';
import definitions from 'common/definitions';

export const Modal = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    height: 100vh;
    justify-content: center;
    position: fixed;
    width: 100vw;
    z-index: 20;
    visibility: hidden;
    opacity: 0;
`;

export const ModalBox = styled.div`
    background-color: white;
    border-radius: 10px;
    position: relative;
    width: 500px;
    @media (max-width: ${definitions.SMALL_DEVICES_MIN_WIDTH - 1}px) {
        max-width: 90%
        min-width: 300px;
    }
`;

export const ModalHeader = styled.div`
    height: 30px;
    background-image: linear-gradient(90deg, ${colors.tinyBorders}, ${colors.themeColor1});
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
        color: white;
        font-size: 30px;
        font-weight: 800;
        cursor: pointer;
        height: inherit;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -5px;
    }
`;

export const ProjectLogo = styled.div`
    width: 140px;
    height: 100px;
    margin: auto;
    margin-top: 30px;
    border: 1px solid ${colors.tinyBorders};
    border-radius: 10px;
    background: ${props => `url(${projectLogo(props.project)}) no-repeat center`};
    background-size: cover;
`;

export const ProjectInformation = styled.div`
    border: 1px solid ${colors.tinyBorders};
    border-radius: 10px;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 40px;
    height: 40vh;
    overflow-y: auto;
    text-align: left;
    padding: 18px;
`;