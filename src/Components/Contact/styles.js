import styled from 'styled-components';

import LinkedinMedia from 'imgs/social_media_linkedin.png';
import GithubMedia from 'imgs/social_media_github.png';

export const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const SocialMedia = styled.div`
    width: 100px;
    height: 100px;
    background: ${props => `url(${props.media === 'linkedin' ? LinkedinMedia : GithubMedia}) no-repeat center`};
    background-size: cover;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 100px;
`;