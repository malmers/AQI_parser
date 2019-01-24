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

    update_status(status);
    update_type(type);
    update_location(location);
    document.getElementById("aqi_value").value = parseInt(aqi, 2);
    document.getElementById("particle_value").value = parseInt(particle, 2);
  }
}

function update_status(status) {
  status = parseInt(status, 2)
  switch(status) {
    case 0: status = "StatusInvalid"; break;
    case 1: status = "StatusValid"; break;
    case 2: status = "StatusUnavailable"; break;
    case 3: status = "StatusServiceRequired"; break;
    default:
      break;
  }
  document.getElementById("status_value").value = status;
}

function update_type(type) {
  type = parseInt(type, 2)
  switch(type) {
    case 0: type = "TypeInvalid"; break;
    case 1: type = "TypePM25"; break;
    case 2: type = "TypePM10"; break;
    default:
      break;
  }
  document.getElementById("type_value").value = type;
}

function update_location(location) {
  location = parseInt(location, 2)
  switch(location) {
    case 0: location = "LocationInvalid"; break;
    case 1: location = "LocationInside"; break;
    case 2: location = "LocationOutside"; break;
    default:
      break;
  }
  document.getElementById("location_value").value = location;
}
