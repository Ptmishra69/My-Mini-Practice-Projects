add_button = document.getElementById("add")
number = document.getElementById("number")
sub_button = document.getElementById("sub")


add_button.addEventListener('click' , function(){
    let actualvalue = Number(number.textContent);
    actualvalue=actualvalue+1
    number.textContent = actualvalue

})


sub_button.addEventListener('click' , function(){
    let subvalue = Number(number.textContent)

    subvalue = subvalue - 1

    if(subvalue<0){
        alert("value can't be negative")
    }
    else{
    number.textContent = subvalue}
})