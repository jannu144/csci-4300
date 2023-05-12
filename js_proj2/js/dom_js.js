//Sanjana Satish - 3:55 PM class

//div_greet
const am_btn = document.getElementById("am");
const pm_btn = document.getElementById("pm");
const greeting = document.getElementById("greeting");
am_btn.addEventListener("click", function(){
    greeting.innerHTML = "Good Morning!";
});
pm_btn.addEventListener("click", function(){
    greeting.innerHTML = "Good Night!";
}); 
//div_color
const red_btn = document.getElementById("red");
const yellow_btn = document.getElementById("yellow");
const green_btn = document.getElementById("green");
const blue_btn = document.getElementById("blue");
const div_color = document.getElementById("div_color");

red_btn.addEventListener("click", function(){
    div_color.setAttribute('class', 'bg_red');
});
yellow_btn.addEventListener("click", function(){
    div_color.setAttribute('class', 'bg_yellow');
});
green_btn.addEventListener("click", function(){
    div_color.setAttribute('class', 'bg_green');
});
blue_btn.addEventListener("click", function(){
    div_color.setAttribute('class', 'bg_blue');
});
//div_list
const input_box = document.querySelector('#usrInput');
const add_btn = document.querySelector('#addBtn');
const ul_list = document.querySelector('#myUL');
const div_list = document.getElementById("div_list");

add_btn.addEventListener("click", function(){
    const user_input = input_box.value;
    input_box.value = "";

    const new_item = document.createElement('li');
    new_item.textContent = user_input;

    const delete_btn = document.createElement('button');
    delete_btn.textContent = 'Delete';
    new_item.appendChild(delete_btn);

    delete_btn.addEventListener("click", function(){
        ul_list.removeChild(new_item);
    });
    ul_list.appendChild(new_item);
    new_item.appendChild(delete_btn);
});