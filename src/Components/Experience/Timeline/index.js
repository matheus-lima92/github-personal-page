import React from 'react';

import TimelineEvent from './TimelineEvent';
import { TimelineStyled, YearMark } from './style';

class Timeline extends React.Component {

    render() {
        return (
            <TimelineStyled>
                <YearMark>
                    <span>2020</span>
                </YearMark>
                <TimelineEvent
                    distanceToTop={50}
                    distanceToBottom={151}
                    orientation="left"
                    company="bairesdev"
                    jobStartDate="Julho 2019"
                    jobEndDate="Presente"
                    jobTitle="Engenheiro de Software"
                />
                <YearMark>
                    <span>2019</span>
                </YearMark>
                <TimelineEvent
                    distanceToTop={50}
                    distanceToBottom={351}
                    orientation="right"
                    company="getty"
                    jobStartDate="Novembro 2018"
                    jobEndDate="Julho 2019"
                    jobTitle="Engenheiro de Software"
                />
                <TimelineEvent
                    distanceToTop={251}
                    distanceToBottom={151}
                    orientation="left"
                    company="hypnobox"
                    jobStartDate="Agosto 2018"
                    jobEndDate="Maio 2019"
                    jobTitle="Engenheiro de Software"
                />
                <YearMark>
                    <span>2018</span>
                </YearMark>
                <TimelineEvent
                    distanceToTop={50}
                    distanceToBottom={151}
                    orientation="right"
                    company="aktienow"
                    jobStartDate="Dezembro 2016"
                    jobEndDate="Agosto 2018"
                    jobTitle="Engenheiro de Software"
                />
                <YearMark>
                    <span>2016</span>
                </YearMark>
                <TimelineEvent
                    distanceToTop={50}
                    distanceToBottom={151}
                    orientation="left"
                    company="cnpem"
                    jobStartDate="Março 2015"
                    jobEndDate="Setembro 2016"
                    jobTitle="Estagiário de Software"
                />
                <YearMark>
                    <span>2015</span>
                </YearMark>
                <TimelineEvent
                    distanceToTop={50}
                    distanceToBottom={151}
                    orientation="right"
                    company="wise"
                    jobStartDate="Agosto 2014"
                    jobEndDate="Fevereiro 2015"
                    jobTitle="Programa de Estágio"
                />
                <YearMark>
                    <span>2014</span>
                </YearMark>
                <TimelineEvent
                    distanceToTop={50}
                    distanceToBottom={151}
                    orientation="left"
                    company="cnpq"
                    jobStartDate="Julho 2012"
                    jobEndDate="Agosto 2013"
                    jobTitle="Programa de Estágio"
                />
                <YearMark>
                    <span>2012</span>
                </YearMark>
            </TimelineStyled>
        )
    }
}

export default Timeline;
