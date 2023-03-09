// Conversion starting from Fahrenheit Degrees
document.getElementById('fahrInput').addEventListener('input', function(e) {

  // Define Fahrenheit degrees to convert
  let fahr = e.target.value;
  
  // Convert to Celsius degrees
  document.getElementById('fahrToCel').innerHTML = ((5/9)*((fahr*1)-32)).toFixed(2);
  
  // Convert to Kelvin degrees
  document.getElementById('fahrToKel').innerHTML = ((5/9)*((fahr*1)+459.67)).toFixed(2);
  
});

// Convert starting from Celsius Degrees
document.getElementById('celInput').addEventListener('input', function(e) {
  
  // Define Celsius degrees to convert
  let cel = e.target.value;
 
  // Convert to Fahrenheit degrees
  document.getElementById('celToFahr').innerHTML = ( (cel*1.8) + 32).toFixed(2);
  
  // Convert to Kelvin degrees
  document.getElementById('celToKel').innerHTML = ( (cel*1) + 273.15).toFixed(2);
  
});

// Convert starting from Kelvin Degrees
document.getElementById('kelInput').addEventListener('input', function(e) {
  
  // Define Kelvin degrees to convert
  let kel = e.target.value;
  
  // Convert to Fahrenheit degrees
  document.getElementById('kelToFahr').innerHTML = ( 1.8*((kel*1)-273.15) + 32).toFixed(2);
  
  // Convert to Celsius degrees
  document.getElementById('kelToCel').innerHTML = ((kel*1)-273.15).toFixed(2);
  
});