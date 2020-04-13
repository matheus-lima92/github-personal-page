import React from 'react';
import { useTranslation } from 'react-i18next';

import Paragraph from 'Components/common/Paragraph';
import Title from 'Components/common/Title';
import { ContentSection } from 'common/style';

const About = () => {
    const { t } = useTranslation();
    return (
        <ContentSection>
            <Title title="Sobre" />
        <Paragraph firstParagraph={true}>
            Olá, meu nome é Matheus Gomes, sou brasileiro nascido no estado de São Paulo, e trabalho como engenheiro de software. {t('Welcome to React')}
        </Paragraph>
        <Paragraph>
            Sou formado em engenharia de controle e automação pela Universidade Estadual de Campinas (UNICAMP). Ao longo do curso de engenharia
            tive contato com diversas áreas: conceitos de cálculo, física, computação, engenharia elétrica e mecânica eram parte da grade
            curricular. De tudo que estudei, o que realmente fez meu olho brilhar foi o desenvolvimento de software.
        </Paragraph>
        <Paragraph lastParagraph={true}>
            Meu primeiro trabalho remunerado relacionado à programação foi um projeto de iniciação científica que iniciei em 2012, ainda
            cursando a faculdade, e de lá pra cá já fiz estágio, freelas, trabalhei em empresas dentro e fora do Brasil, e hoje atuo como
            engenheiro de software na <a href="https://www.bairesdev.com/" target="_blank" rel="noopener noreferrer">BairesDev</a>, empresa que se encontra
            entre as <a href="https://finance.yahoo.com/news/bairesdev-recognized-silicon-valley-top-150000742.html" target="_blank" rel="noopener noreferrer">top 10 companhias</a> de
            mais rápido crescimento do Vale do Silicio, Estados Unidos.
        </Paragraph>
        </ContentSection>
    )
};

export default About;
