const btntoggle = document.querySelector('.toggle-btn');

btntoggle.addEventListener("click", function(){
    console.log("clicked")
    document.getElementById("sidebar").classList.toggle("active");
});


