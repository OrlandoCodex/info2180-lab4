/*function SearchDoc(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            alert(this.responseText);
        }
        xhttp.open("GET","superheroes.php");
        xhttp.send();
    }*/

var input = document.getElementById("textfield").value;
const searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click",btnfunction);
function btnfunction(e){
    //e.preventDefault();
    const xhttp = new XMLHttpRequest();
    if(input.trim() == ""){
        xhttp.onload = function() {
            document.getElementById("result").innerHTML = this.responseText;
          
          xhttp.open("GET", "superheroes.php");
          xhttp.send();
    }else{
        xhttp.onload = function() {
            document.getElementById("result").innerHTML = this.responseText;
          }
          xhttp.open("POST", "superheroes.php");
          xhttp.send(input);
        }
        
}


