import NLeads from 'imgs/99leads.png';
import Droz from 'imgs/droz.jpg';
import Onfo from 'imgs/onfo.png';
import Tronwallet from 'imgs/tronwallet.png';
import aktienowLogo from 'imgs/logo_aktienow.png';
import cnpemLogo from 'imgs/logo_cnpem.jpg';
import wiseLogo from 'imgs/logo_wisewood.png';
import cnpqLogo from 'imgs/logo_cnpq.jpg';

// https://my.onfocoin.com/home
// https://www.youtube.com/watch?v=ADaGn9UWx7U

const projectLogo = (project) => {
    if (project === '99 Leads') return NLeads;
    if (project === 'Droz') return Droz;
    if (project === 'Onfo') return Onfo;
    if (project === 'Tronwallet') return Tronwallet;
    return NLeads;
};

export default projectLogo;