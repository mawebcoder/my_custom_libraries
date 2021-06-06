(function () {
    object = {
        init: function (options) {
            let {el, search} = options;
            if (!el || el.nodeType != 1) {
                throw new Error('please choose a HTML tag');
            }
            let opt = el.querySelectorAll('option');
            el.style.display = `none`;
            let selectBox = document.createElement('div');
            selectBox.classList.add('selectBox');
            el.parentNode.insertAdjacentElement('beforeend', selectBox);
            let span = document.createElement('span');
            selectBox.insertAdjacentElement('beforeend', span);
            let optionsBox = document.createElement('div');
            optionsBox.classList.add('optionsBox');
            optionsBox.classList.add('hiddenSlide');
            selectBox.insertAdjacentElement('beforeend', optionsBox);

            opt.forEach((item, index) => {
                let value = item.value;
                let text = item.textContent;
                if (index === 0) {
                    span.textContent = text;
                }
                let option = document.createElement('div');
                option.classList.add('option');
                option.setAttribute('data-value', value);
                option.textContent = text;
                optionsBox.insertAdjacentElement('beforeend', option);
                option.addEventListener('click', function () {
                    opt.forEach(item => {
                        item.removeAttribute('selected');
                    })
                    el.querySelector(`option[value="${value}"]`).setAttribute('selected', 'selected');
                    span.textContent = this.textContent;
                    optionsBox.classList.toggle('showSlide');
                    optionsBox.classList.toggle('hiddenSlide');
                    if (onchange && typeof onchange == 'function') {
                        onchange();
                    }
                })
            })
            span.addEventListener('click', function () {
                optionsBox.classList.toggle('showSlide');
                optionsBox.classList.toggle('hiddenSlide');
            })
            if (search) {
                let input = document.createElement('input');
                optionsBox.insertAdjacentElement('afterbegin', input)
                input.addEventListener('keyup', function () {
                    let value = this.value;
                    if (value === "") {
                        optionsBox.querySelectorAll('.option').forEach(item => {
                            item.style.display = "block";
                        })
                        return;
                    }
                    optionsBox.querySelectorAll('.option').forEach((item, index) => {
                        let text = item.textContent;
                        if (!text.includes(value)) {
                            item.style.display = "none";
                        } else {
                            item.style.display = "block";
                        }
                    })

                })
            }


        }
    }
    window.selectBox = object;
})()
