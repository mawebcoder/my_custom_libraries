(function () {
    object = {
        init: function (option) {
            let {element, date, callback = null} = option;
            let el = document.querySelector(element);
            if (!el && el.nodeType != 1) {
                throw new Error('please choose a element');
            }
            let days = el.querySelector('.days');
            let hours = el.querySelector('.hours')
            let minutes = el.querySelector('.minutes')
            let seconds = el.querySelector('.seconds')
            if (!days) {
                throw new Error('please set the days Element');
            } else if (!hours) {
                throw new Error('please set the hours Element');
            } else if (!minutes) {
                throw new Error('please set the minutes Element')
            } else if (!seconds) {
                throw new Error('please set the seconds element');
            }
            if (!date) {
                throw new Error('please select a Date');
            }
            if (callback !== null && typeof callback !== 'function') {
                console.error('please set a function in callback function option')
            }
            let targetTime = new Date(date).getTime();
            let autoTimer = setInterval(function () {
                let presentTime = new Date().getTime();
                let diff = targetTime - presentTime;
                if (diff < 0) {
                    seconds.textContent = '00';
                    hours.textContent = "00";
                    days.textContent = "00";
                    if (callback !== null) {
                        callback();
                    }
                    clearInterval(autoTimer);
                    return false;
                }
                let Days = Math.floor(diff / (24 * 60 * 60 * 1000));
                let Hours = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
                let Minutes = Math.floor((diff % (3600 * 1000)) / (1000 * 60));
                let Seconds = Math.floor((diff % (1000 * 60)) / (1000));
                if (Days < 10) {
                    days.textContent = '0' + Days;
                } else {
                    days.textContent = Days;
                }
                if (Hours < 10) {
                    hours.textContent = '0' + Hours;
                } else {
                    hours.textContent = Hours;
                }
                if (Minutes < 10) {
                    minutes.textContent = '0' + Minutes
                } else {
                    minutes.textContent = Minutes

                }
                if (Seconds < 10) {
                    seconds.textContent = '0' + Seconds
                } else {
                    seconds.textContent = Seconds
                }

            }, 1000)
        }
    }

    window.Timer = object;
})()
