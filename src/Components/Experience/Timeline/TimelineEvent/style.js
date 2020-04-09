import styled from 'styled-components';
import colors from 'common/colors';
import definitions from 'common/definitions';
import bairesdevLogo from 'imgs/logo_bairesdev.png';
import gettyLogo from 'imgs/logo_getty.png';
import hypnoboxLogo from 'imgs/logo_hypnobox.png';
import aktienowLogo from 'imgs/logo_aktienow.png';
import cnpemLogo from 'imgs/logo_cnpem.jpg';
import wiseLogo from 'imgs/logo_wisewood.png';
import cnpqLogo from 'imgs/logo_cnpq.jpg';

const companyLogo = (company) => {
    if (company === 'BairesDev') return bairesdevLogo;
    if (company === 'Getty IO') return gettyLogo;
    if (company === 'Hypnobox') return hypnoboxLogo;
    if (company === 'Aktie now') return aktienowLogo;
    if (company === 'CNPEM') return cnpemLogo;
    if (company === 'Wise') return wiseLogo;
    if (company === 'CNPQ') return cnpqLogo;
};

export const TimelineEventStyled = styled.div`
    position: relative;
    .timeline-event {
        width: ${definitions.TIMELINE_EVENT_WIDTH}px;
        height: 200px;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        background-color: white;
        z-index: 3;
        border-radius: 15px;
        box-shadow: 0 4px 8px 0 black;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        .company-logo {
            border: 1px solid ${colors.tinyBorders};
            width: 90px;
            height: 90px;
            border-radius: 10px;
            background: ${props => `url(${companyLogo(props.company)}) no-repeat center`};
            background-size: cover;
        }
        .working-period {
            border: 1px solid ${colors.tinyBorders};
            width: 170px;
            height: 60px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            .job-position {
                font-size: 14px;
            }
            .job-period {
                font-size: 12px;
                position: relative;
                top: -4px;
            }
        }
    }
    .timeline-event:hover {
        box-shadow: 0 8px 16px 0 black;
    }
    .right-event {
        left: calc(100% - ${definitions.TIMELINE_EVENT_WIDTH}px);
    }
    .left-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - ${definitions.TIMELINE_EVENT_WIDTH}px);
        top: 50px;
        left: ${definitions.TIMELINE_EVENT_WIDTH}px;
    }
    .left-horizontal-line-animated {
        position: absolute;
        background-image: linear-gradient(-90deg, ${colors.animatedLineColor1}, ${colors.animatedLineColor2});
        height: 3px;
        top: 50px;
        z-index: 2;
        left: ${definitions.TIMELINE_EVENT_WIDTH}px;
    }
    .right-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - ${definitions.TIMELINE_EVENT_WIDTH}px);
        top: 50px;
        left: 50%;
    }
    .right-horizontal-line-animated {
        position: absolute;
        background-image: linear-gradient(-90deg, ${colors.animatedLineColor2}, ${colors.animatedLineColor1});
        height: 3px;
        top: 50px;
        z-index: 2;
        right: ${definitions.TIMELINE_EVENT_WIDTH}px;
    }
    .vertical-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 202px;
        width: 3px;
        top: 0px;
        left: 50%;
    }
    .top-vertical-line-animated {
        transform: rotatex(180deg);
        transform-origin: top;
        position: absolute;
        background-image: linear-gradient(0deg, ${colors.animatedLineColor2}, ${colors.animatedLineColor1});
        width: 3px;
        top: 50px;
        left: 50%;
        z-index: 2;
    }
    .bottom-vertical-line-animated {
        position: absolute;
        background-image: linear-gradient(0deg, ${colors.animatedLineColor2}, ${colors.animatedLineColor1});
        width: 3px;
        top: 50px;
        left: 50%;
        z-index: 2;
    }
    .bottom-circle-animated {
        position: absolute;
        margin: auto;
        left: calc(50% - ${definitions.YEAR_MARK_SIZE / 2}px);
        top: ${props => props.distanceToBottom + 50}px;
        z-index: 2;
    }
    .top-circle-animated {
        position: absolute;
        margin: auto;
        left: calc(50% - ${definitions.YEAR_MARK_SIZE / 2}px);
        top: -${props => props.distanceToTop + 50}px;
        z-index: 2;
    }
`