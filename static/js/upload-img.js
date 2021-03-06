/*jshint sub:true*/

var profileImg = false;
var productImg = false;

// Cloudinary widjet script for proping a field for
// image upload
var myWidget = cloudinary.applyUploadWidget(
    document.getElementById('opener'), 
    { cloudName: "silorak", uploadPreset: "e6rwssw9", folder: "coock_book-img" }, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info);

      if (profileImg == true) {
        var userImg = document.getElementById("user_image");
        userImg.setAttribute("value", result.info['secure_url']);
        profileImg = false;
      } else {
        if ( productImg == true ) {
          var productImage = document.getElementById("product_image");
          productImage.setAttribute("value", result.info['secure_url']);
          productImg = false;
        } else {
            var recipeImg = document.getElementById("recipe_image");
            recipeImg.setAttribute("value", result.info['secure_url']);
        }
      }
    }
  }
);


  document.getElementById("upload_widget").addEventListener("click", function () {
    var check = document.getElementById("upload_widget");
      if (check.getAttribute("data-profile") == "profile") {
        profileImg = true;
      }
      if (check.getAttribute("data-product") == "product") {
        productImg = true;
      }
    myWidget.open();
  }, false);

