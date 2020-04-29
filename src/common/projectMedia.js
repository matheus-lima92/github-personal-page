import nleads_pic_1 from 'imgs/nleads_pic_1.png';
import tronwallet_media_1 from 'imgs/tronwallet_pic_1.jpeg';
import droz from 'imgs/droz.gif';

// https://my.onfocoin.com/home
// https://www.youtube.com/watch?v=ADaGn9UWx7U

const projectMedia = (media) => {
    if (media === 'nleads_pic_1') return nleads_pic_1;
    if (media === 'tronwallet_media_1') return tronwallet_media_1;
    if (media === 'droz') return droz;
    return nleads_pic_1;
};

export default projectMedia;