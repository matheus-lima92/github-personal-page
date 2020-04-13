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