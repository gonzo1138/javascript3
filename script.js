document.addEventListener('DOMContentLoaded', function() {

    var button = document.getElementById('button');
    var kreis  = document.getElementById('kreis');

    button.addEventListener("click", buttonpushed);

    function buttonpushed(){
        if (kreis.style.display == "block") {
            kreis.style.display="none";
        } else {
            kreis.style.display="block";
        }
    }


    // --------------------- Bonus: -------------------------
    var kreis2 = document.getElementById('nocheinkreis');
    kreis.addEventListener("click", kreispushed);

    function kreispushed(){
        if (kreis2.style.display == "block") {
            kreis2.style.display="none";
        } else {
            kreis2.style.display="block";
        }
    }

});