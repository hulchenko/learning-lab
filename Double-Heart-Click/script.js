const total = document.getElementById('total');

const duplicateDivs = (quantity) => {
    let divTag = '';
    for (let i = 1; i <= quantity; i++) {
        divTag += `<div class="cat" style="background: url(img/c${i}.webp) no-repeat center center/cover;"></div>`;
    }
    document.querySelector('.cats').innerHTML = divTag;

    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        const indClick = document.createElement('span');

        let count = 0;
        div.appendChild(indClick);
        indClick.classList.add('times');
        indClick.innerHTML = count;

        const icon = document.createElement('i');
        icon.classList.add('fa-brands', 'fa-gratipay');
        div.appendChild(icon);


        div.addEventListener('dblclick', function createHeart(e) {
            if (count >= 4) {
                icon.style.setProperty('color', 'red');
            }
            const heart = document.createElement('i');
            heart.classList.add('fas', 'fa-heart');
            div.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);

            count++;
            indClick.innerHTML = count;

            // get total likes
            total.innerHTML = ++total.innerHTML;
        });
    });

};

duplicateDivs(16);

