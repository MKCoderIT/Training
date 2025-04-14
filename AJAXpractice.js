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
    AJAX.open('GET', 'https://jsonplaceholder.typicode.com/users' , true);



    AJAX.addEventListener("loadstart", function () {
        UserUnorderList.innerHTML = "";
        ListItemCreator("The request is loading. Please wait...");
    })
    AJAX.addEventListener("readystatechange", function() {
        if (AJAX.readyState === XMLHttpRequest.OPENED) {
            UserUnorderList.innerHTML = "";
            ListItemCreator("Request has been opened.");
        }
        else if (AJAX.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
            UserUnorderList.innerHTML = "";
            ListItemCreator("The request is loading. Please wait...");
        }
        else if (AJAX.readyState === XMLHttpRequest.LOADING) {
            UserUnorderList.innerHTML = "";
            ListItemCreator("The request is loading. Please wait...");
        }
        else if (AJAX.readyState === XMLHttpRequest.DONE){
            if (AJAX.status === 200) {
                UserUnorderList.innerHTML = "";
                var ResultData = JSON.parse(AJAX.responseText);
                ResultData.forEach(object => {
                    ListItemCreator(`[Username: ${object.username}]   [Name: ${object.name}]   [Email: ${object.email}]`);
                });
            } else {
                UserUnorderList.innerHTML = "";
                ListItemCreator("Cannot GET file from server. Status: " + AJAX.status);
            }
        }else{
            UserUnorderList.innerHTML = "";
            ListItemCreator("Request failed. Please try again later.");
        }
    });
    AJAX.addEventListener("error", function () {
        UserUnorderList.innerHTML = "";
        ListItemCreator("Request failed. Please try again later.");
    });
    AJAX.send();
});

Resetlist.addEventListener("click" , function () {
    UserUnorderList.innerHTML = "";
    ListItemCreator("List item is null. Please click the button");
})





var PostDataForm = document.querySelector("#PostDataForm");
var UsernameInput = document.querySelector("#UsernameInput");
var NameInput = document.querySelector("#NameInput");
var StatusMessage = document.querySelector("#StatusMessage");
var SetTimeID;


PostDataForm.addEventListener("submit" , function (e) {
    e.preventDefault();
    StatusMessage.textContent = "Data is ready to be sent...";

    var usernameVariable = UsernameInput.value;
    var nameVAriable = NameInput.value;
    var JSONrequest = JSON.stringify({
        username: usernameVariable,
        name: nameVAriable,
    })

    if (SetTimeID) {
        clearTimeout(SetTimeID);
    }

    var AJAX = new XMLHttpRequest();
    AJAX.open('Post', 'https://jsonplaceholder.typicode.com/users' , true);
    AJAX.setRequestHeader("Content-Type", "application/json");


    AJAX.addEventListener("loadstart", function () {
        StatusMessage.textContent = "Sending information... Please wait.";
        StatusMessage.style.color = "blue";
    });

    AJAX.addEventListener("readystatechange", function () {
        if (AJAX.readyState === XMLHttpRequest.LOADING) {
            StatusMessage.textContent = "Sending information... Please wait.";
            StatusMessage.style.color = "blue";
        }
    });


    AJAX.addEventListener("load", function() {
        if (AJAX.readyState === XMLHttpRequest.DONE){
            setTimeout(function(){
            if (AJAX.status === 201) {
                StatusMessage.textContent = "The operation was successful.";
                StatusMessage.style.color = "green";
                clearTimeout(SetTimeID);
            } else {
                UserUnorderList.innerHTML = "";
                StatusMessage.textContent = "Cannot Post file to server. Status: " + AJAX.status;
                StatusMessage.style.color = "red";
            }
        } , 2000)
        }else{
            UserUnorderList.innerHTML = "";
            StatusMessage.textContent = "Request failed. Please try again later.";
            StatusMessage.style.color = "red";
        }
    });
    AJAX.addEventListener("error", function () {
        UserUnorderList.innerHTML = "";
        StatusMessage.textContent = "Request failed. Please try again later.";
        StatusMessage.style.color = "red";
    });

    SetTimeID = setTimeout(() => StatusMessage.textContent = "",5000)
    AJAX.send(JSONrequest);
})
