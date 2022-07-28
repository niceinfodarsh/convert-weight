let button = document.getElementById('calc');
let twobutton = document.getElementById('calcc');
button.addEventListener('click', function(){
    let kg = document.getElementById('inputkg').value;
    document.getElementById('inputpound').value = kg * 2.20462262;
})
twobutton.addEventListener('click', function(){
    let pound = document.getElementById('inputpound').value;
    document.getElementById('inputkg').value = pound / 2.20462262;
})