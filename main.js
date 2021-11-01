var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "mama.jpeg","mama.jpeg" ,  "hermana.jpeg", "yo.jpeg","sissy.jpeg","dora.jpeg","oscar.jpeg"];
var names = ["libro-familiar","Hedna Navarro", "Daniele Sivieri", "Giuliana Sivieri Nav", "Alessandro Sivieri Nav", "Sissy Sivieri Nav","Margarita placencia","Oscar Navarro"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = images[i];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
