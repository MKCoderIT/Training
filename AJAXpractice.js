"use strict"

var UserUnorderList = document.querySelector("#UserUnorderList");
var UserGetButton = document.querySelector("#UserGetButton");
var Resetlist = document.querySelector("#Resetlist");

function ListItemCreator(TextContent) {
    var ListItem = document.createElement("li");
    var ListIdNumber = UserUnorderList.children.length + 1;

    ListItem.classList.add("UserUnorderListItem");
    ListItem.setAttribute("id" , `UserUnorderListItem_${ListIdNumber}`),
    ListItem.textContent = TextContent;
    UserUnorderList.appendChild(ListItem);
}
if(UserUnorderList.children.length == 0){
    ListItemCreator("List item is null. Please click the button");
}


UserGetButton.addEventListener("click", function() {
    var AJAX = new XMLHttpRequest();
    AJAX.open('GET', 'https://jsonplaceholder.typicode.com/users');

    AJAX.addEventListener("load", function() {
        if (AJAX.readyState === XMLHttpRequest.OPENED){
            UserUnorderList.innerHTML = "";
            ListItemCreator("Request sent.")
        }
        if (AJAX.readyState === XMLHttpRequest.LOADING){
            UserUnorderList.innerHTML = "";
            ListItemCreator("The request is in progress. Please wait.")
        }
        if (AJAX.readyState === XMLHttpRequest.DONE){
            if (AJAX.status === 200) {
                UserUnorderList.innerHTML = "";
                var ResultData = JSON.parse(AJAX.responseText);
                ResultData.forEach(object => {
                    ListItemCreator(`[Username: ${object.username}]   [Name: ${object.name}]   [Email: ${object.email}]`);
                });
            } else {
                alert("Cannot GET file from server. Status: " + AJAX.status);
            }
        }else{
            alert("Request failed. Please try again later.");
        }
    });
    AJAX.send();
});

Resetlist.addEventListener("click" , function () {
    UserUnorderList.innerHTML = "";
    ListItemCreator("List item is null. Please click the button");
})
