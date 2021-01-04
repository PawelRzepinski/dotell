const stats = $('.stats');
const wrapper = $('.component__content-wrapper');
let flag = true;


const  runNumbers = () => {
    stats.each((index, statsItem) => {
        $(statsItem).find('.stats__value').numScroll({
            number: $(statsItem).data('value'),
            time: wrapper.data('time'),
        })
    })
};

$(document).ready(() => {
    wrapper.viewportChecker({
        classToAdd: 'inViewport',
    });
});

$(window).on('load scroll', () => {
    if (wrapper.hasClass('inViewport') && flag) {
        flag = false;
        runNumbers();
        return flag;
    }
});
