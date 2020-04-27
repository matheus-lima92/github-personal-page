import React from 'react';
import gsap from 'gsap';
import i18n from 'i18n';

import { LanguagesContainer, CurrentLanguage, LanguagesSelector, LanguageOption } from './styles';

class Languages extends React.Component {
    constructor(props) {
        super(props);
        this.languagesWrapper = React.createRef();
        this.languagesSelector = React.createRef();
        this.state = { selectorVisible: false, currentLanguage: i18n.language };
        this.toggleSelector = this.toggleSelector.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        gsap.set(this.languagesSelector, { scale: 0 });
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggleSelector() {
        const { selectorVisible } = this.state;
        if (!selectorVisible) {
            gsap.fromTo(this.languagesSelector, 0.5, { scale: 0 }, { scale: 1, ease: 'elastic.out(1, 0.7)' });
            this.setState(prevState => ({ ...prevState, selectorVisible: true }));
            return;
        }
        gsap.fromTo(this.languagesSelector, 0.5, { scale: 1 }, { scale: 0, ease: 'elastic.in(1, 0.7)' });
        this.setState(prevState => ({ ...prevState, selectorVisible: false }));
    }

    changeLanguage(lang) {
        const { currentLanguage } = this.state;
        if (lang === currentLanguage) {
            this.toggleSelector();
            return;
        }
        i18n.changeLanguage(lang);
        this.setState(prevState => ({ ...prevState, currentLanguage: lang }));
        this.toggleSelector();
    }

    handleClickOutside(event) {
        const { selectorVisible } = this.state;
        if (!selectorVisible) return;
        if (this.languagesWrapper && !this.languagesWrapper.contains(event.target)) {
            this.toggleSelector();
        }
    }

    render() {
        const { currentLanguage } = this.state;
        return (
            <LanguagesContainer ref={(elem) => { this.languagesWrapper = elem; }}>
                <CurrentLanguage
                    language={currentLanguage}
                    onClick={() => this.toggleSelector()}
                />
                <LanguagesSelector ref={(elem) => { this.languagesSelector = elem; }}>
                    <LanguageOption language="pt" isSelected={currentLanguage === 'pt'} onClick={() => this.changeLanguage('pt')} />
                    <LanguageOption language="en" isSelected={currentLanguage === 'en'} onClick={() => this.changeLanguage('en')} />
                </LanguagesSelector>
            </LanguagesContainer>
        )
    }
}

export default Languages;
