var retur = "";

var x = "123";

function createStr(amount) {
  for (let i = 0; i < amount; i++ ) {
    let slump = Math.floor(Math.random() * Math.floor(26))
    retur += String.fromCharCode(65 + slump);
  }
  return retur;
}

export {createStr, x};
