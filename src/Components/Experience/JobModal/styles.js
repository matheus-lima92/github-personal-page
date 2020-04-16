import styled from 'styled-components';
import colors from 'common/colors';
import companyLogo from 'common/companyLogo';

export const CompanyLogo = styled.div`
    width: 200px;
    height: 200px;
    margin: auto;

    border: 1px solid ${colors.tinyBorders};
    border-radius: 10px;
    background: ${props => `url(${companyLogo(props.company)}) no-repeat center`};
    background-size: cover;
`;

export const CompanyInformation = styled.div`
    border: 1px solid ${colors.tinyBorders};
    border-radius: 5px;
    width: 90%;
    margin: auto;
    margin-top: 30px;
`;

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
    max-width: 80%;
    min-width: 600px;
    height: 200px;
`;

export const ModalHeader = styled.div`
    height: 30px;
    background-color: ${colors.borders};
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
        color: white;
        position: absolute;
        font-size: 30px;
        font-weight: 800;
        cursor: pointer;
        height: inherit;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`