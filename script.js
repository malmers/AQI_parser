window.onload = function () {
  let input = document.getElementById("input_bytes");

  input.oninput = function() {
    if(!input.checkValidity()) {
      return;
    }

    val = ("00000000000000000000000000000000" + input.value).slice(-32);
    let status = Number(val.substr(-2, 2));
    let type = Number(val.substr(-4, 2));
    let aqi = Number(val.substr(-14, 10));
    let location = Number(val.substr(-16, 2));
    let particle = Number(val.substr(-26, 10));
    document.getElementById("status").value = status;
    document.getElementById("type").value = type;
    document.getElementById("aqi").value = aqi;
    document.getElementById("location").value = location;
    document.getElementById("particle").value = particle;
  }
}
