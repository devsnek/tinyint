const Long = require('long');
const map = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
  'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'x', 'y', 'z', '2', '3', '4',
];

function encode(inp) {
  let res = '';
  inp = typeof inp === 'string' ? Long.fromString(inp) : Long.fromNumber(inp);
  if (inp.isZero()) return map[0];
  while (inp.gt(0)) {
    let val = inp.mod(map.length);
    inp = inp.div(map.length);
    res += map[val];
  }
  return res;
}

function decode(encoded) {
  let res = Long.fromNumber(0);
  for (let i = encoded.length - 1; i >= 0; i--) {
    let ch = encoded[i];
    let val = map.indexOf(ch);
    res = res.mul(map.length).add(val);
  }
  return res.toString();
}

module.exports = { encode, decode };
