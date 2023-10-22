var menuIcon = document.querySelectorAll(".menu-icon")[0];
var sideBar = document.querySelector(".sideBar")
var container = document.querySelector(".container");
var vid_list = document.querySelectorAll(".vid-list"); 
var changeTheme = document.querySelector(".theme-change")
changeTheme.onclick = () =>{
    var navbar = document.querySelector("nav");
    sideBar.style.backgroundColor = '#45474B';
    sideBar.style.color = 'white';
    var sideBarText = sideBar.querySelector(".shortcut-links a p");
    var sideBarText = sideBar.querySelectorAll(".shortcut-links a p");
    for (var i = 0; i < sideBarText.length; i++) {
        sideBarText[i].style.color = 'white';
    }
    navbar.style.backgroundColor = '#45474B';
    navbar.style.color = 'white'; 
    container.style.backgroundColor = '#45474B';

}

vid_list.forEach(video =>{
    const thumbnail_img = video.querySelector('.thumbnail');
    const videoPlayer = video.querySelector('.video-hover-player');

    // video.addEventListener('mouseenter', () =>{
    //     videoPlayer.style.display = 'block';
    //     videoPlayer.play();
    // })

    // video.addEventListener('mouseleave', () =>{
    //     videoPlayer.style.display = 'none';
    //     videoPlayer.pause();
    // });
});

menuIcon.onclick = () => {
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container");
}