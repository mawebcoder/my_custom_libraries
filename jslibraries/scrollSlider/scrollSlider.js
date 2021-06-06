(function () {
    let object = {
        init: function (options) {

            let {el, listItemWidth, listItemMargin} = options;
            let element = document.querySelector(el);
            let scrollDistance = element.offsetWidth
            let listItemLength = element.querySelectorAll('li').length;
            let UlWidth = listItemLength * (listItemWidth + 2 * listItemMargin);
            let Ul = element.querySelector('ul');
            Ul.style.width = `${UlWidth}px`;
            Ul.style.marginRight = 0;
            let scrollNumbers = Math.floor(UlWidth / scrollDistance);
            let pertMargin = UlWidth - (scrollNumbers * scrollDistance);
            let nextScrollSliderButton = element.querySelector('.nextScrollSlider')
            let prevScrollSlider = element.querySelector('.prevScrollSlider');
            let counter = 0
            nextScrollSliderButton.addEventListener('click', function () {
                counter++;
                let marginRight = parseFloat(Ul.style.marginRight);
                if (counter === scrollNumbers) {
                    Ul.style.marginRight = (marginRight - pertMargin) + 'px';
                    this.setAttribute('disabled', true);
                } else {

                    Ul.style.marginRight = (marginRight - scrollDistance) + 'px';

                }
                if (counter !== 0) {
                    prevScrollSlider.removeAttribute('disabled')
                }

            })
            prevScrollSlider.addEventListener('click', function () {
                counter--;
                let marginRight = parseFloat(Ul.style.marginRight);
                if (counter === scrollNumbers - 1) {
                    Ul.style.marginRight = (marginRight + pertMargin) + 'px';
                    nextScrollSliderButton.removeAttribute('disabled')
                } else {
                    Ul.style.marginRight = (marginRight + scrollDistance) + 'px';
                }
                if (counter === 0) {
                    this.setAttribute('disabled', true)
                }

            })
        }

    }


    window.scrollSlider = object;

})()
