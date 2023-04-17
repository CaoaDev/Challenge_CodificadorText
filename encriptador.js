function process() {
  var input = document.getElementById("input").value.toLowerCase();
  var mode = document.querySelector('input[name="mode"]:checked').value;
  var output = document.getElementById("output");

  if (mode === "encrypt") {
    output.value = encrypt(input);
  } else if (mode === "decrypt") {
    output.value = decrypt(input);
  }
}

function encrypt(text) {
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var letter = text.charAt(i);
    switch (letter) {
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "a":
        result += "ai";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += letter;
    }
  }

  return result;
}

function decrypt(text) {
  var result = "";
  var i = 0;

  while (i < text.length) {
    var letter = text.charAt(i);
    if (letter === "e") {
      result += "e";
      i += 5;
    } else if (letter === "i") {
      result += "i";
      i += 4;
    } else if (letter === "a") {
      result += "a";
      i += 2;
    } else if (letter === "o") {
      result += "o";
      i += 4;
    } else if (letter === "u") {
      result += "u";
      i += 4;
    } else {
      result += letter;
      i++;
    }
  }

  return result;
}

function copy() {
  var output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
}
