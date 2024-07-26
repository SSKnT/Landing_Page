var sun_png = document.getElementById('mode');
var head = document.getElementsByTagName('header')[0];
var foot = document.getElementsByTagName('footer')[3];
var login = document.getElementById('login');
var t_white = document.getElementsByClassName('t-white');
var dropdown_btn = document.getElementById('dropdownMenuButton')
var body = document.getElementsByTagName('body')[0];

sun_png.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        sun_png.src = 'light.png';
        dropdown_btn.classList.remove('btn-dark')
        dropdown_btn.style.color = 'black';
        dropdown_btn.style.backgroundColor = 'beige';
        head.classList.remove('bg-dark');
        head.style.backgroundColor = 'beige';
        foot.classList.remove('bg-dark');
        foot.style.backgroundColor = 'beige';
        login.classList.remove('btn-outline-light');
        login.classList.add('btn-outline-dark');
        body.classList.remove('bg-dark');
        body.style.backgroundColor = 'beige';
        for(let i = 0; i < t_white.length; i++){
            t_white[i].style.color = 'black';
        }
        for(let i = 1; i < 6;i++){
            document.getElementById(`t-${i}`).classList.remove('text-white')
            document.getElementById(`t-${i}`).classList.add('text-dark')
        }
    } else {
        sun_png.src = 'dark.png';
        dropdown_btn.style.color = '';
        dropdown_btn.style.backgroundColor = ''; 
        dropdown_btn.classList.add('btn-dark')
        head.style.backgroundColor = '';
        head.classList.add('bg-dark');
        foot.style.backgroundColor = '';
        foot.classList.add('bg-dark');
        login.classList.remove('btn-outline-dark');
        login.classList.add('btn-outline-light');
        body.style.backgroundColor = '';
        body.classList.add('bg-dark');
        for(let i = 0; i < t_white.length; i++){
            t_white[i].style.color = 'white';
        }
        for(let i = 1; i < 6;i++){
            document.getElementById(`t-${i}`).classList.remove('text-dark')
            document.getElementById(`t-${i}`).classList.add('text-white')
        }
    }
});
