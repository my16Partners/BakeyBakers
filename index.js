
function startload() {
  if (!localStorage.token) {
    localStorage.token = 0;
  }
  document.getElementById("tokenamount").innerHTML = "You have " + localStorage.token + " Tokens.";
  if (localStorage.canopenLS) {
    document.getElementById("canopen").innerHTML = "You can open a loot Crate";
  } else {
    setTimeout(function() {
      localStorage.canopenLS = true;
      document.getElementById("canopen").innerHTML = "You can open a loot Crate";
    }, 3000);
    document.getElementById("canopen").innerHTML = "You can't open a loot Crate";
  }
}

function GetToken() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.token) {
      localStorage.token = Number(localStorage.token) + 3;
      location.replace("https://zipansion.com/1po69");
    } else {
      localStorage.token = 3;
    }
    document.getElementById("tokenamount").innerHTML = "You have " + localStorage.token + " Tokens.";
  } else {
    document.getElementById("tokenamount").innerHTML = "Sorry, your browser does not support web storage..., I will give you 100 a day, sorry for the inconvenece";
  }
}

function OpenLootCrate() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.canopenLS) {
      localStorage.canopenLS = false;
      location.replace("https://bakeybakers.com/game/LootCrate");
    } else {
      setTimeout(function() {
          localStorage.canopenLS = true}, 15000);
      }
    
    document.getElementById("canopen").innerHTML = "You can open a loot Crate";
    }
}

function getStarRatingString(rating) {
  var toReturn = "";
  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      toReturn += "★";
    } else {
      toReturn += "☆";
    }
  }
  return toReturn;
}

function payfive(_url) {
  this.url = _url;
  if (typeof(Storage) !== "undefined") {
    if (localStorage.token) {
      if (localStorage.token >= 5) {
        localStorage.token = Number(localStorage.token) - 5;
        location.replace(this.url);
        document.getElementById("tokenamount").innerHTML = "You have " + localStorage.token + " Tokens.";
      }
    }
  }
}
