function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("t3"). value = c;
}


function soustraction()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("t3"). value = c;
}


function multiplication()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("t3"). value = c;
}


function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("t3"). value = c;
}

function pair()
{
	var x = document.getElementById("t3").value
	if (x % 2 ==0){
    	document.getElementById("t4").value = " Paire "
	}
	else{
    	document.getElementById("t4").value = " Impaire "
	}
}

function permute() {
    
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

}


function effacer()
{
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
}


