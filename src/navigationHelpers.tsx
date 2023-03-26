import {animateScroll} from 'react-scroll';

export const scrollToTop = () => {
    console.log('scroll to top called');
    animateScroll.scrollToTop({duration: 0});
};
