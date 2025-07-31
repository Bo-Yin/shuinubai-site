// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("viewImg");
var imgList = document.getElementsByClassName("myImg");
for (var i = 0; i < imgList.length; i++) {
  imgList[i].onclick = function() {
    modal.style.display = "block";
    var imgSrc = this.src;
    var imgNameSlice = imgSrc.slice(0, -5);
    var imgNewSrc = imgNameSlice + ".png";
    modalImg.src = imgNewSrc;
    modalImg.alt = this.alt;
  }
}

modal.onclick = function() { 
  modal.style.display = "none";
}