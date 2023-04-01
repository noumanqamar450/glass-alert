// Site 
window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('.nav')
    let body = document.documentElement
    console.log();
    if (body.scrollTop > 70) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})

// Nav Collapse 

let collapse = document.querySelector('.collapse')
let collapseX = document.querySelector('.collapse-x')
let nav = document.querySelector('.nav ul')
let overlay = document.querySelector('.nav .overlay')
let navLi = document.querySelectorAll('.nav ul li')
collapse.addEventListener('click', ()=> {
    nav.classList.add('active');
    overlay.classList.add('active')
})
collapseX.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active')
})
for (let i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active')
    })
}
overlay.addEventListener('click', () => {
    collapseX.classList.add('pop');
    setTimeout(()=>{
        collapseX.classList.remove('pop');
    }, 200)
})

// Clipboard Copy

let copyBtn = document.querySelectorAll('.btn-copy')
let copyCode = document.querySelectorAll('.code code')
let codeArea = document.querySelectorAll('.code')
for (let i = 0; i < copyBtn.length; i++){
    copyBtn[i].addEventListener('click', ()=>{
        copyBtn[i].innerHTML = `<i class="bi bi-clipboard-check-fill"></i>`;
        codeArea[i].style.borderColor = 'rgba(255, 255, 255, 0.5)';
        navigator.clipboard.writeText(copyCode[i].innerText);
        setTimeout(()=>{
            codeArea[i].style.borderColor = '';
            copyBtn[i].innerHTML = `<i class="bi bi-clipboard"></i>`;
        }, 1000)
    })
}

// Alert

let dark = { theme: 'dark' }
let light = { theme: 'light' } // if you did not use alert by default is in light theme
let custom = { themeColor: '#ff0000', textColor: '' }
const alertBox = new GlassAlert(light);
const checkAlert = () => {
    alertBox.run({
        title: 'Glass Alert',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem, laborum commodi natus aliquam asperiores. Illum autem eius ad corporis tempore nostrum facilis officiis veniam accusantium, placeat dolores dolorem animi!',
        img: './assets/image/favicon.png',
        imgWidth:'120px'
    })
}
const lightTheme = () => {
    alertBox.run({
        title: 'Light Theme',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem, laborum commodi natus aliquam asperiores. Illum autem eius ad corporis tempore nostrum facilis officiis veniam accusantium, placeat dolores dolorem animi!`,
        img: './assets/image/favicon.png',
        imgWidth: '120px'
    })
}

const alertBoxDark = new GlassAlert(dark);
const darkTheme = () => {
    alertBoxDark.run({
        title: 'Dark Theme',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem, laborum commodi natus aliquam asperiores. Illum autem eius ad corporis tempore nostrum facilis officiis veniam accusantium, placeat dolores dolorem animi!',
        img: './assets/image/favicon.png',
        imgWidth: '120px'
    })
}

const alertBoxCustom = new GlassAlert(custom);
const customTheme = () => {
    alertBoxCustom.run({
        title: 'Custom Theme',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem, laborum commodi natus aliquam asperiores. Illum autem eius ad corporis tempore nostrum facilis officiis veniam accusantium, placeat dolores dolorem animi!`,
        img: './assets/image/favicon.png',
        imgWidth: '120px',
    })
}

const customT = () => {
    alertBoxCustom.run({
        title: 'Hello World 2!',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem, laborum commodi natus aliquam asperiores. Illum autem eius ad corporis tempore nostrum facilis officiis veniam accusantium, placeat dolores dolorem animi!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium exercitationem, laborum commodi natus aliquam asperiores.Illum autem eius ad corporis tempore nostrum facilis officiis veniam accusantium, placeat dolores dolorem animi!`,
        img: './assets/image/favicon.png',
        imgWidth: '200px',
        imgHeight: '200px',
        titleColor: '',
        contentColor: '',
    })
}



