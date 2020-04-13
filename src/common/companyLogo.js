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

export default companyLogo;