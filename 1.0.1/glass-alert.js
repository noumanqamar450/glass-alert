let css = document.createElement('link');
const glassAlertModal = document.createElement('div');
glassAlertModal.classList.add('glass-alert')
glassAlertModal.innerHTML = `
<div class="glass-alert-overlay" onclick="glassAlertOverlay()"></div>
<div class="glass-alert-modal">
    <svg onclick="glassAlertX()" class="glass-alert-modal-x" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
    <div class="glass-alert-modal-image"></div>
    <h1></h1>
    <div class="glass-alert-modal-content">
        <p></p>
    </div>
</div>
`;
css.href = 'https://cdn.jsdelivr.net/gh/noumanqamar450/glass-alert@master/1.0.1/glass-alert-style.css';
css.rel = 'stylesheet';
css.type = 'text/css';

const runGlassAlert = () => {
    document.body.appendChild(glassAlertModal)
    document.head.appendChild(css)
}

runGlassAlert()

class GlassAlert {
    constructor(props){
        if (props){
            this.theme = props.theme
            this.themeColor = props.themeColor
            this.textColor = props.textColor
        }
    }
    run(obj) {
        if (this.themeColor){
            //Color Generator
            let themeColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.themeColor)
            let themeColorOverlay = `rgba(${parseInt(themeColor[1], 16)}, ${parseInt(themeColor[2], 16)}, ${parseInt(themeColor[3], 16)}, 0.3)`;
            let themeColorModal = `rgba(${parseInt(themeColor[1], 16)}, ${parseInt(themeColor[2], 16)}, ${parseInt(themeColor[3], 16)}, 0.5)`;
            
            //Modal Active
            document.querySelector('.glass-alert-modal h1').textContent = obj.title;
            document.querySelector('.glass-alert-modal p').textContent = obj.text;
            document.querySelector('.glass-alert').classList.add('active');
            document.querySelector('.glass-alert-modal').classList.add('active');

            //Theme
            document.querySelector('.glass-alert-overlay').style.background = themeColorOverlay;
            document.querySelector('.glass-alert-modal').style.background = themeColorModal;
            if (this.textColor){
                document.querySelector('.glass-alert-modal').style.color = this.textColor;
            } else {
                document.querySelector('.glass-alert-modal').style.color = '#fff';
            }
            setTimeout(() => {
                document.querySelector('.glass-alert').classList.add('opacity');
            }, 50)
            if (obj.img) {
                let image = `<img src='${obj.img}'>`;
                document.querySelector('.glass-alert-modal-image').innerHTML = image;
            } else {
                document.querySelector('.glass-alert-modal-image').innerHTML = '';
            }
            if (obj.imgWidth) {
                document.querySelector('.glass-alert-modal-image img').style.width = obj.imgWidth;
            } else {
                if (document.querySelector('.glass-alert-modal-image img')) {
                    document.querySelector('.glass-alert-modal-image img').style.width = '';
                }
            }
            if (obj.imgHeight) {
                document.querySelector('.glass-alert-modal-image img').style.height = obj.imgHeight;
            } else {
                if (document.querySelector('.glass-alert-modal-image img')) {
                    document.querySelector('.glass-alert-modal-image img').style.height = '';
                }
            }
            if (obj.titleColor) {
                document.querySelector('.glass-alert-modal h1').style.color = obj.titleColor;
            } else {
                document.querySelector('.glass-alert-modal h1').style.color = '';
            }
            if (obj.contentColor) {
                document.querySelector('.glass-alert-modal p').style.color = obj.contentColor;
            } else {
                document.querySelector('.glass-alert-modal p').style.color = '';
            }
        } else if (this.theme === 'dark'){ 
            //Modal Active
            document.querySelector('.glass-alert-modal h1').textContent = obj.title;
            document.querySelector('.glass-alert-modal p').textContent = obj.text;
            document.querySelector('.glass-alert').classList.add('active');
            document.querySelector('.glass-alert-modal').classList.add('active');
            
            //Theme
            document.querySelector('.glass-alert-overlay').classList.add('dark');
            document.querySelector('.glass-alert-modal').classList.add('dark');
            if (this.textColor) {
                document.querySelector('.glass-alert-modal').style.color = this.textColor;
            } else {
                document.querySelector('.glass-alert-modal').style.color = '';
            }
            setTimeout(() => {
                document.querySelector('.glass-alert').classList.add('opacity');
            }, 50)
            if (obj.img) {
                let image = `<img src='${obj.img}'>`;
                document.querySelector('.glass-alert-modal-image').innerHTML = image;
            } else {
                document.querySelector('.glass-alert-modal-image').innerHTML = '';
            }
            if (obj.imgWidth) {
                document.querySelector('.glass-alert-modal-image img').style.width = obj.imgWidth;
            } else {
                if (document.querySelector('.glass-alert-modal-image img')) {
                    document.querySelector('.glass-alert-modal-image img').style.width = '';
                }
            }
            if (obj.imgHeight) {
                document.querySelector('.glass-alert-modal-image img').style.height = obj.imgHeight;
            } else {
                if (document.querySelector('.glass-alert-modal-image img')) {
                    document.querySelector('.glass-alert-modal-image img').style.height = '';
                }
            }
            if (obj.titleColor) {
                document.querySelector('.glass-alert-modal h1').style.color = obj.titleColor;
            } else {
                document.querySelector('.glass-alert-modal h1').style.color = '';
            }
            if (obj.contentColor) {
                document.querySelector('.glass-alert-modal p').style.color = obj.contentColor;
            } else {
                document.querySelector('.glass-alert-modal p').style.color = '';
            }
        } else {
            //Modal Active
            document.querySelector('.glass-alert-modal h1').textContent = obj.title;
            document.querySelector('.glass-alert-modal p').textContent = obj.text;
            document.querySelector('.glass-alert').classList.add('active');
            setTimeout(()=>{
                document.querySelector('.glass-alert').classList.add('opacity');
            }, 50)
            document.querySelector('.glass-alert-modal').classList.add('active');
            if (this.textColor) {
                document.querySelector('.glass-alert-modal').style.color = this.textColor;
            } else {
                document.querySelector('.glass-alert-modal').style.color = '';
            }
            if (obj.img) {
                let image = `<img src='${obj.img}'>`;
                document.querySelector('.glass-alert-modal-image').innerHTML = image;
            } else {
                document.querySelector('.glass-alert-modal-image').innerHTML = '';
            }
            if (obj.imgWidth) {
                document.querySelector('.glass-alert-modal-image img').style.width = obj.imgWidth;
            } else {
                if (document.querySelector('.glass-alert-modal-image img')) {
                    document.querySelector('.glass-alert-modal-image img').style.width = '';
                }
            }
            if (obj.imgHeight) {
                document.querySelector('.glass-alert-modal-image img').style.height = obj.imgHeight;
            } else {
                if (document.querySelector('.glass-alert-modal-image img')) {
                    document.querySelector('.glass-alert-modal-image img').style.height = '';
                }
            }
            if (obj.titleColor) {
                document.querySelector('.glass-alert-modal h1').style.color = obj.titleColor;
            } else {
                document.querySelector('.glass-alert-modal h1').style.color = '';
            }
            if (obj.contentColor) {
                document.querySelector('.glass-alert-modal p').style.color = obj.contentColor;
            } else {
                document.querySelector('.glass-alert-modal p').style.color = '';
            }
        }
    }
}

const glassAlertOverlay = () => {
    document.querySelector('.glass-alert-modal-x').classList.add('glass-alert-pop');
    setTimeout(()=>{
        document.querySelector('.glass-alert-modal-x').classList.remove('glass-alert-pop');
    },500)

}
const glassAlertX = () => {
    document.querySelector('.glass-alert-modal').classList.remove('active');
    document.querySelector('.glass-alert').classList.remove('opacity');
    setTimeout(()=>{
        document.querySelector('.glass-alert').classList.remove('active');
    }, 500)
}

