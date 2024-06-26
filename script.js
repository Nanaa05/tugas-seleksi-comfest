// let review = [{'name':'Nathanael Rachmat','rating':5,'comment':'Rejuvenate your skin with our bespoke facial treatments. Our experienced estheticians use top-quality products to enhance your natural glow and leave you feeling refreshed.'}];
// renderReview();

let review = []

function addReview() {
    document.getElementById('review').style.display = 'block';
}

const page = (document.getElementById('title').innerText)
if (page == 'Home') {
    const Element = document.getElementById('home');
    Element.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    Element.style.boxShadow = 'inset 0px 0px 15px 0px rgba(0, 0, 0, 0.1)';
}
else if (page == 'Reservation'){
    const Element = document.getElementById('reservation');
    Element.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    Element.style.boxShadow = 'inset 0px 0px 15px 0px rgba(0, 0, 0, 0.1)';
}

function homePage(){
    window.location.href = 'homepage.html'
}

function reservePage(){
    window.location.href = 'reservationpage.html'
}

function check(string) {
    let checkboxes = document.getElementsByClassName('check');
    const checked = document.getElementById(string).checked;
    if (checked === false){
        document.getElementById(string).checked = true;
    } 
    else{
        for (let i = 0;i<checkboxes.length;i++){
            if (checkboxes[i].checked === true && checkboxes[i].id != string) {
                checkboxes[i].checked = false;
            }
        }
    }
}
    

function submitReview() {
    const name = document.getElementById('name').value;
    const checkboxes = document.getElementsByClassName('check');
    const comment = document.getElementById('comment').value;
    let checkbox = 0;
    for (let i = 0;i<checkboxes.length;i++){
        if (checkboxes[i].checked === true) {
            checkbox = i+1;
        }
    }

    if (name === ''||checkbox===0||comment===''){
        document.getElementById('requirement').style.display = 'block';
    }
    else{
        review.push({'name':name,'rating':checkbox,'comment':comment});
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
        document.getElementById('requirement').style.display = 'none';
        for (let i = 0;i<checkboxes.length;i++){
            checkboxes[i].checked = false;
        }
        document.getElementById('review').style.display = 'none';
        renderReview();
    }   
}

function cancelReview() {
    const checkboxes = document.getElementsByClassName('check');
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('requirement').style.display = 'none';
    for (let i = 0;i<checkboxes.length;i++){
        checkboxes[i].checked = false;
    }
    document.getElementById('review').style.display = 'none';
}

function renderReview() {
    let stringHTML = ""
    let name
    let rating
    let comment
    for (let i = review.length-1;i>=0;i--){
        name = review[i]['name'];
        rating = review[i]['rating'];
        comment = review[i]['comment'];
        stringHTML += `<div id="review${i}" class="box">Rated (${rating}/5) by ${name} <br> "${comment}" </div>`
    }
    document.getElementById('review-show').innerHTML = stringHTML;
    showMoreBox();
}

function showMoreBox() {
    let name
    let rating
    let comment
    let element;
    let overflow;
    for (let i = 0;i<review.length;i++){
        name = review[i]['name'];
        rating = review[i]['rating'];
        comment = review[i]['comment'];
        element = document.getElementById(`review${i}`);
        overflow = isOverflown(element);
        if (overflow === true){
            element.innerHTML = `Rated (${rating}/5) by ${name} <br> "${comment}" <br> <button id="rev-button${i}" onclick="showMore(${i})" class="show-more">show more</button>`;
        }
    }
}

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }

function showMore(i){
    let element = document.getElementById(`review${i}`);
    element.style.height = 'fit-content';
    let button = document.getElementById(`rev-button${i}`);
    button.onclick = function(){showLess(i)};
    button.innerHTML = 'show less';
    button.style.position = 'inherit';
    button.style.top = '0px';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%,0)';
    button.style.width = '100%'
}

function showLess(i){
    let element = document.getElementById(`review${i}`);
    element.style.height = '80px';
    let button = document.getElementById(`rev-button${i}`);
    button.onclick = function(){showMore(i)};
    button.innerHTML = 'show more';
    button.style.position = 'absolute';
    button.style.top = '90%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%,-50%)';
    button.style.width = '85%'
}

