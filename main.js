let iconContainer=document.getElementsByClassName("iconContainer");
for (var i = 0; i < iconContainer.length; i++) {
  iconContainer[i].addEventListener('click',(e)=>{
    if (e.target.innerText=="Library") {
      window.location.href='Library/l-index.html';
    } else if (e.target.innerText=="Search") {
      window.location.href="Search/S-index.html";
    }
  })
}
