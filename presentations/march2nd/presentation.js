// document.getElementById("ID of an HTML document element").addEventListener("type of element",listener <<could be a function>> )

document.getElementById("fahrInput").addEventListener("input", function(ev){
    let fahrenheit = ev.target.value;

    document.getElementById("fahrToCel").innerHTML = ((5/9)*((fahrenheit) - 32)).toFixed(2);
    document.getElementById("fahrToKel").innerHTML = ((5/9)*((fahrenheit) + 459.67)).toFixed(2);
});

document.getElementById("celInput").addEventListener("input", function(ev){
    let cel = ev.target.value;

    document.getElementById("celToFahr").innerHTML = ( (cel*1.8) + 32).toFixed(2);
    document.getElementById("celToKel").innerHTML = ( (cel*1) + 273.15).toFixed(2);
});

document.getElementById("kelInput").addEventListener("input", function(ev){
    let kel = ev.target.value;

    document.getElementById("kelToFahr").innerHTML = ( 1.8*((kel*1)-273.15) + 32).toFixed(2);
    document.getElementById("kelToCel").innerHTML = ((kel*1)-273.15).toFixed(2);
});