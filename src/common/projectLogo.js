import NLeads from 'imgs/99leads.png';
import Droz from 'imgs/droz.jpg';
import Onfo from 'imgs/onfo.png';
import Tronwallet from 'imgs/tronwallet.png';
import SimonGame from 'imgs/simonGame.png';
import Totvs from 'imgs/logo_totvs.png';
import ReactShapes from 'imgs/react_shapes.png';
import GithubLogo from 'imgs/logo_github.png';

// https://my.onfocoin.com/home
// https://www.youtube.com/watch?v=ADaGn9UWx7U

const projectLogo = (project) => {
    if (project === 'Tronwallet') return Tronwallet;
    if (project === '99 Leads') return NLeads;
    if (project === 'Droz') return Droz;
    if (project === 'CST - TOTVS') return Totvs;
    if (project === 'Onfo') return Onfo;
    if (project === 'Simon Game') return SimonGame;
    if (project === 'React Shapes') return ReactShapes;
    if (project === 'Github Search') return GithubLogo;
    return NLeads;
};

export default projectLogo;