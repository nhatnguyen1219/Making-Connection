var user1 = document.querySelector("#request-1");
var user2 = document.querySelector("#request-2");
var userProfile = document.querySelector("#profile-name")
function remove1() {
    user1.remove();
}
function remove2(){
    user2.remove();
}
function change(){
    userProfile.innerHTML = "Nhat Nguyen";
}