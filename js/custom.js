let sidebar = document.querySelector(".sidebar");
let menuicon = document.querySelector(".menu-icon");

menuicon.addEventListener("click",function()
{
    // console.log("You Clicked");
    sidebar.classList.toggle("show-sidebar");
})

