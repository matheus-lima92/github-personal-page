const companyInfo = (company, info) => {
    if (company === 'BairesDev') return bairesdevLogo;
    if (company === 'Getty IO') return gettyLogo;
    if (company === 'Hypnobox') return hypnoboxLogo;
    if (company === 'Aktie now') return aktienowLogo;
    if (company === 'CNPEM') return cnpemLogo;
    if (company === 'Wise') return wiseLogo;
    if (company === 'CNPQ') return cnpqLogo;
};

export default companyInfo;