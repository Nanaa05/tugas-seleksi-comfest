let review = []

function addReview() {
    document.getElementById('review').style.display = 'block';
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

    if (name === null||checkbox===0||comment===null){
        document.getElementById('requirement').style.display = 'block';
    }
    else{
        review.push({'name':name,'rating':checkbox,'comment':comment});
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
        for (let i = 0;i<checkboxes.length;i++){
            checkboxes[i].checked = false;
        }
        document.getElementById('review').style.display = 'none';
        console.log(review);
    }
    
}