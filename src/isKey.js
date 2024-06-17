import Keys from "./keys";
import Ascii from "./ascii";

const isSomeString = (x) => typeof x == "string" && x.length;

function _isKey(e, shortCut) {
  let result = false;

  if (isSomeString(shortCut)) {
    const keys = shortCut.split("+");

    for (let key of keys) {
      let _key = key.trim();
      let optional = false;

      if (_key.endsWith("?")) {
        _key = _key.substr(0, _key.length - 1);
        optional = true;
      }

      if (_key) {
        if (_key == "shift") {
          result = e.shiftKey;

          if (!result && !optional) {
            break;
          }

          continue;
        }
        if (_key == "alt") {
          result = e.altKey;

          if (!result && !optional) {
            break;
          }

          continue;
        }
        if (_key == "ctrl") {
          result = e.ctrlKey;

          if (!result && !optional) {
            break;
          }

          continue;
        }

        const pascalKey = _key[0].toUpperCase() + _key.substr(1);

        if (Keys[pascalKey] != undefined) {
          result = e.keyCode == Keys[pascalKey];

          if (!result && !optional) {
            break;
          }

          continue;
        }
        if (Ascii[pascalKey] != undefined) {
          result = e.keyCode == Ascii[pascalKey];

          if (!result && !optional) {
            break;
          }

          continue;
        }

        result = e.key == _key;

        if (!result && !optional) {
          break;
        }
      }
    }
  }

  return result;
}

function isKey(e, shortCut) {
  let result = false;

  if (isSomeString(shortCut)) {
    const keys = shortCut.split("|");

    for (let key of keys) {
      let _key = key.trim();

      result = _isKey(e, _key);

      if (result) {
        break;
      }
    }
  }

  return result;
}

export default isKey;
