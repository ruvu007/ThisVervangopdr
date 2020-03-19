const btn = document.querySelectorAll('.btn button');
document.getElementsByClassName('dlt')[0].style.height = document.getElementsByClassName('btn')[0].clientHeight + 'px';

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', click);
}

function click() {
    document.getElementById('delete').innerHTML = document.getElementById('delete').innerHTML + this.dataset.dlt;
}

function deletebtn() {
    document.getElementById("delete").innerHTML = " ";
}