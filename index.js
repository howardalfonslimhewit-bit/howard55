function playClick(){

    const sound = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
    );

    sound.play();
}

function showSection(sectionId){

    playClick();

    document.querySelectorAll('.page')
    .forEach(page=>{

        page.classList.remove('active');

    });

    document.getElementById(sectionId)
    .classList.add('active');

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

}

let total = 0;
let count = 0;

function beli(nama,harga){

    playClick();

    total += harga;
    count++;

    document.getElementById('total')
    .innerText = total;

    document.getElementById('cart-count')
    .innerText = count;

    let li = document.createElement('li');

    li.innerText =
    `${nama} - Rp ${harga}`;

    document.getElementById('cart-items')
    .appendChild(li);

}

function toggleCart(){

    playClick();

    document.getElementById('cart-box')
    .classList.toggle('hide');

}

function checkout(){

    playClick();

    alert(
        "Checkout berhasil 🔥\n\nTotal Belanja Rp " + total
    );

}

function registerUser(e){

    e.preventDefault();

    playClick();

    alert(
        "WELCOME VIP MEMBER GIOSMART ✨"
    );

}

const reviews = [

    '"Makanannya super enak!" - sergio',

    '"Packaging premium banget 🔥" - jayden max',

    '"Delivery cepat dan makanan masih panas!" - malvyn',

    '"Website nya keren banget 😍" - jayden owen'

];

let reviewIndex = 0;

setInterval(()=>{

    reviewIndex++;

    if(reviewIndex >= reviews.length){

        reviewIndex = 0;

    }

    document.getElementById('reviewText')
    .innerText = reviews[reviewIndex];

},3000);