import nleads_pic_1 from 'imgs/nleads_pic_1.png';
import tronwallet_media_1 from 'imgs/tronwallet_pic_1.jpeg';
import droz from 'imgs/droz.gif';
import onfoScreen from 'imgs/onfo_screen.png';
import Genius from 'imgs/demo_genius.gif';
import ReactShapes from 'imgs/react_shapes_demo.gif';
import GithubSearch from 'imgs/github-search.gif';

// https://my.onfocoin.com/home

const projectMedia = (media) => {
    if (media === 'nleads_pic_1') return nleads_pic_1;
    if (media === 'tronwallet_media_1') return tronwallet_media_1;
    if (media === 'droz') return droz;
    if (media === 'onfo_screen') return onfoScreen;
    if (media === 'demo_genius') return Genius;
    if (media === 'react_shapes') return ReactShapes;
    if (media === 'github_search') return GithubSearch;
    return nleads_pic_1;
};

export default projectMedia;