(function () {
    object = {
        init: function (options) {
            let {input, textArea, passwordLength = 6} = options;
            if (!input || !textArea) {
                throw new Error('please choose a element or textArea');
            }
            input.addEventListener('keyup', function () {
                let value = this.value;
                if (value === "") {
                    textArea.textContent = "";
                    return;
                }
                if (value.length < passwordLength) {
                    textArea.style.color = `red`;
                    textArea.textContent = `رمز عبور باید حداقل ${passwordLength}کاراکتر باشد `
                    return;
                }
                let verified = ["[A-Z]", "[a-z]", "[0-9]", "[!@#$%^&*?]"];
                cnt = 0;
                verified.forEach(item => {
                    if (new RegExp(item).test(value)) {
                        cnt++;
                    }
                })
                switch (cnt) {

                    case(1):
                    case(2):
                        textArea.textContent = 'رمز عبور ضعیف است'
                        textArea.style.color = `red`;
                        break;
                    case(3):
                        textArea.textContent = 'رمز عبور خوب'
                        textArea.style.color = `orange`;
                        break;
                    case(4):
                        textArea.textContent = 'رمز عبور قدرتمند'
                        textArea.style.color = `green`;
                        break;

                }

            })
        }

    }


    window.complixify = object;
})
()
