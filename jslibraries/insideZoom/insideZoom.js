(function () {
    object = {
        init: function (option) {
            let {zooScale = 2, el} = option;
            if (!el || el.nodeType != 1) {
                throw  new Error('please select a element')
            }
            el.addEventListener('mouseenter', function () {
                el.style.backgroundSize = `${zooScale * 100}%`;
            })
            el.addEventListener('mouseleave', function () {
                el.style.backgroundSize = `100%`;
            })
            el.addEventListener('mousemove', function (e) {
                X = 100 * (((e.clientX) - (el.getBoundingClientRect().left)) / (el.offsetWidth));
                Y = 100 * (((e.clientY) - (el.getBoundingClientRect().top)) / (el.offsetHeight));
                el.style.backgroundPosition = `${X}% ${Y}%`;
            })

        }
    }

    window.insideZoom = object;
})()
