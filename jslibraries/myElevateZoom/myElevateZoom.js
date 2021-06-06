(function () {
    object = {
        init: function (options) {
            // options
            let {
                imageWindowHeight = 300
                , element
                , lensWidth = 150
                , lensHeight = 150
                , imageWindowWidth = 300,
                imageZoomPosition = 'left'
            } = options
            let el = document.querySelector(element);
            if (!el || el.nodeType !== 1) {
                throw new Error('please choose a element')
            }
            let image = el.querySelector('img');
            if (!image || image.nodeType !== 1) {
                throw new Error('please set the image inside the element');
            }
            el.addEventListener('mouseenter', function () {

                let zooContainer = document.createElement('div');
                zooContainer.classList.add('zoom-container');
                el.insertAdjacentElement('beforeend', zooContainer);
                zooContainer.style.width = `100%`;
                zooContainer.style.height = `100%`;
                zooContainer.style.position = `absolute`;
                zooContainer.style.top = `0`;
                zooContainer.style.zIndex = 2;
                let lens = document.createElement('div');
                lens.classList.add('lens');
                lens.style.border = `2px solid red`
                lens.style.height = `${lensHeight}px`
                lens.style.width = `${lensWidth}px`
                lens.style.position = `absolute`
                zooContainer.insertAdjacentElement('beforeend', lens);
                imageZoomContainer = document.createElement('div');
                imageZoomContainer.classList.add('.imageZoomContainer');
                imageZoomContainer.style.width = imageWindowWidth + 'px';
                imageZoomContainer.style.height = imageWindowHeight + 'px'
                zooContainer.insertAdjacentElement('beforeend', imageZoomContainer);
                imageZoomContainer.style.position = `absolute`;
                imageZoomContainer.style.backgroundImage = `url(${image.dataset.zoom})`
                imageZoomContainer.style.backgroundRepeat = 'no-repeat';
                switch (imageZoomPosition) {
                    case ('left'):
                        imageZoomContainer.style.top = 0;
                        imageZoomContainer.style.right = `105%`;
                        break;
                    case('top'):
                        imageZoomContainer.style.left = 0;
                        imageZoomContainer.style.bottom = `105%`;
                        break;
                    case('bottom'):
                        imageZoomContainer.style.left = 0;
                        imageZoomContainer.style.top = `105%`;
                        break;
                    case('right'):
                        imageZoomContainer.style.left = `105%`;
                        imageZoomContainer.style.top = 0;
                        break;
                    default:
                        throw new Error('please choose a right direction');
                }

                zooContainer.addEventListener('mousemove', function (e) {
                    let x = e.clientX - zooContainer.getBoundingClientRect().left;
                    let y = e.clientY - zooContainer.getBoundingClientRect().top;
                    y = y - (lens.offsetHeight / 2);
                    x = x - (lens.offsetWidth / 2);
                    if (x <= 0) {
                        x = 0;
                    }
                    if (y <= 0) {
                        y = 0;
                    }
                    if (y >= el.offsetHeight - lens.offsetHeight) {
                        y = el.offsetHeight - lens.offsetHeight;
                    }
                    if (x >= el.offsetWidth - lens.offsetWidth) {
                        x = el.offsetWidth - lens.offsetWidth;
                    }
                    lens.style.top = `${y}px`
                    lens.style.left = `${x}px`
                    let xScale = imageWindowWidth / lensWidth;
                    let yScale = imageWindowHeight / lensHeight;
                    imageZoomContainer.style.backgroundSize = `${zooContainer.offsetWidth * xScale}px ${zooContainer.offsetHeight * yScale}px`;
                    imageZoomContainer.style.backgroundPosition = `-${x * xScale}px -${y * yScale}px`;
                })
                zooContainer.addEventListener('mouseleave', function () {
                    this.remove();
                })
            })


        }
    }
    window.vanillaZoom = object;
})()
