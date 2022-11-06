
function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

function validPhone() {

    let maskOptions = {
        mask: '+{7} (000) 000-00-00',
        dispatch: function (appended, dynamicMasked) {
            let number = (dynamicMasked.value + appended).replace(/\D/g, '');

            return dynamicMasked.compiledMasks.find(function (m) {
                return number.indexOf(m.startsWith) === 0;
            });
        }
    }
    let phoneInputs = $('input[type="tel"]');

    if (phoneInputs) {
        $(phoneInputs).each(function (index) {
            this.imask = IMask(this, maskOptions);
            this.addEventListener('focus', () => {
                this.setAttribute('placeholder', '+7 (___)___-__-__')
            })
            this.addEventListener('blur', () => {
                this.setAttribute('placeholder', ' ')
            })
        });
    }
}

validPhone();

const sliderContainer = document.querySelector('.slider-standart');

if (sliderContainer) {
    let slider = new Swiper(sliderContainer, {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        simulateTouch: true,

        navigation: {
            nextEl: '.slider-standart-next',
            prevEl: '.slider-standart-prev',
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
            }
        }
    });
}

new Sortable(document.getElementById('drop-card'), {
    handle: '.handle'
});