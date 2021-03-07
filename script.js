const tanyaImg = document.getElementById('tanyaImg');
const johnImg = document.getElementById('johnImg');

const tanyaQuote = document.getElementById('tanyaQuote');
const johnQuote = document.getElementById('johnQuote');

const Tanya = document.getElementById('Tanya');
const John = document.getElementById('John');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click',previousProfile);

function previousProfile(){
    console.log(1);
    johnImg.style.display='none';
    tanyaImg.style.display='block';

    johnQuote.style.display='none';
    tanyaQuote.style.display='block';

    John.style.display='none';
    Tanya.style.display='block';

}

next.addEventListener('click',nextProfile);

function nextProfile(){
    console.log(2);
    tanyaImg.style.display='none';
    johnImg.style.display='block';

    tanyaQuote.style.display='none';
    johnQuote.style.display='block';

    Tanya.style.display='none';
    John.style.display='block';
}