function operatexray() {
    var xray1 = Number(document.getElementById("xray-1").innerHTML);
    var xray2 = Number(document.getElementById("xray-2").innerHTML);
    var xray3 = Number(document.getElementById("xray-3").innerHTML);
    var xray4 = Number(document.getElementById("xray-4").innerHTML);
    var res = xray1 + xray2 + xray3 + xray4;
    document.getElementById("xray-res").innerHTML=res;
    photo()
}

function operateperson() {
    
    var person1 = Number(document.getElementById("person-1").innerHTML);
    var person2 = Number(document.getElementById("person-2").innerHTML);
    var person3 = Number(document.getElementById("person-3").innerHTML);
    var res = person1 + person2 + person3;
    document.getElementById("person-res").innerHTML=res;
    photo()
}

function photo() {
    var a = document.getElementById("xray-res").innerHTML;
    var b = document.getElementById("person-res").innerHTML;
    var aresp = document.getElementById("person-photo");
    var aresx = document.getElementById("xray-photo");
    aresp.style.width = ((b / 6) * 100 * 0.8 + "%");
    aresx.style.width = ((a / 6) * 100 * 0.8 + "%");
}