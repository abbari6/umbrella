function changeColor(colorName) {
  var image = document.getElementById("image");
  var button = document.getElementById("uploadButton");
  var updateButton = document.getElementById("updateButton");
  switch (colorName) {
    case "pink":
      button.style.backgroundColor = "pink";
      updateButton.style.backgroundColor = "pink";
      image.src = "assets/images/Pink umbrella.png";
      break;
    case "blue":
      button.style.backgroundColor = "blue";
      updateButton.style.backgroundColor = "blue";
      image.src = "assets/images/Blue umbrella.png";
      break;
    case "yellow":
      button.style.backgroundColor = "yellow";
      updateButton.style.backgroundColor = "yellow";
      image.src = "assets/images/Yello umbrella.png";
      break;
  }
}

function uploadLogo(event) {
  var selectedFile = event.target.files[0];
  var imgtag = document.getElementById("brandLogo");
  var button = document.getElementById("button");
  var updateButton = document.getElementById("updateButton");
  var buttonName = document.getElementById("buttonName");
  buttonName.innerHTML = selectedFile.name;
  var reader = new FileReader();
  reader.onload = function (event) {
    imgtag.src = event.target.result;
  };
  button.style.display = "none";
  updateButton.style.display = "block";
  reader.readAsDataURL(selectedFile);
}

function deleteFile() {
  var button = document.getElementById("button");
  button.style.display = "block";
  var updateButton = document.getElementById("updateButton");
  updateButton.style.display = "none";
  var imgtag = document.getElementById("brandLogo");
  imgtag.src = ""; //reseted the file value
}
