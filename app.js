function SearchDoc(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            alert(this.responseText);
        }
        xhttp.open("GET","superheroes.php");
        xhttp.send();
    }
        


