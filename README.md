# locustjs-keyboard
This library provides helpers regarding keyboard.

# Install
```
npm i @locustjs/keyboard
```

# Import

CommonJs
```javascript
const { Keys } = require('@locustjs/keyboard');
```

ES6
```javascript
import { Keys } from '@locustjs/keyboard'
```

# Helpers
## Keys
`Keys` is an object containing all keyboard keys and their ascii code. In keyboard events such as `onKeyDown`, `onKeyUp`, `onKeyPressed`, instead of comparing `event.keyCode` to a constant number we can compare it to a prop in `Keys`.

Manual comparison
```javascript
function onKeyDown(e) {
    if (e.keyCode == 13) {  // Enter
        // do something
    } else if (e.keyCode == 27) {   // Esc
        // do something
    } else if (e.keyCode == 38) {   // Up Arrow
        // do something
    } else if (e.keyCode == 40) {   // Down Arrow
        // do something
    } else if (e.keyCode == 35) {   // Home
        // do something
    } else if (e.keyCode == 36) {   // End
        // do something
    }
}
```

Using `Keys`
```javascript
import { Keys } from '@locustjs/keyboard'

function onKeyDown(e) {
    if (e.keyCode == Keys.Enter) {  // Enter
        // do something
    } else if (e.keyCode == Keys.Esc) {   // Esc
        // do something
    } else if (e.keyCode == Keys.UpArrow) {   // Up Arrow
        // do something
    } else if (e.keyCode == Keys.DownArrow) {   // Down Arrow
        // do something
    } else if (e.keyCode == Keys.Home) {   // Home
        // do something
    } else if (e.keyCode == Keys.End) {   // End
        // do something
    }
}
```

The event object passed to keyboard event handlers such as `onKeyDown` has a `key` property that provides a text representation of the pressed key. The benefit of using `Keys` is intellisense and avoiding any possible typos or letter casing differences.

For instance, in detecting space key, a code like `if (e.key == 'space')` won't work since `space` has lowercase `s`. We should write `space` with a capital `S` as `Space` (`if (e.key == 'Space')`).

Using `Keys` prevents such mistakes and it helps IDEs to provide intellisense on `Keys` object, simplifying coding.

### Categories
#### Alphabet
Alphabet characters have a single code. For Each alphabet letter there are two props:

- the letter: `a`, `b`, `c`, ...
- a `Key#` prop: `KeyA`, `KeyB`, `KeyC`, ...

Example:
```javascript
e.keyCode == Keys.a
// or
e.keyCode == Keys.KeyA
```

It should be pointed that, there are no distinct codes for uppercase and lowercase letters.
Uppercase letters can be detected by checking `shiftKey` or `CapsLock` in a keyboard event.

```javascript
import { Keys } from '@locustjs/keyboard'

function onKeyDown(e) {
    // detecting uppercase P
    if (e.keyCode == Keys.p) {
        if (e.shiftKey) {
            // deteced
        }
    }
}
```

#### Numbers
For each digit, there are 3 props in `Keys`.

- the digit itself: `Keys[0]`, `Keys[1]`, `Keys[2]`, ...
- a `Digit#` prop: `Digit0`, `Digit1`, `Digit2`, ...
- and name of the digit in english: `Zero`, `One`, `Two`, ...

#### Keypad

- `Numpad0`
- `Numpad1`
- `Numpad2`
- `Numpad3`
- `Numpad4`
- `Numpad5`
- `Numpad6`
- `Numpad7`
- `Numpad8`
- `Numpad9`
- `NumpadStar` or `NumpadMultiply`
- `NumpadAdd` or `NumpadPlus`
- `NumpadSubtract` or `NumpadMinus`
- `NumpadDecimal` or `NumpadDot`
- `NumpadDivide` or `NumpadSlash`

#### Fn keys
- `F1`
- `F2`
- `F3`
- `F4`
- `F5`
- `F6`
- `F7`
- `F8`
- `F9`
- `F10`
- `F11`
- `F12`

#### Punctuation keys
- `Semicolon`: ;
- `Equal`: =
- `Comma`: ,
- `Minus`: -
- `Dot` or `Period`: .
- `Slash`: /
- `BackQuote`, `BackTick`, `Grave` or `GraveAccent`: `
- `BracketLeft` or `LeftBracket` or `OpenBracket`: `[`
- `Backslash`: /
- `BracketRight` or `RightBracket` or `CloseBracket`: `]`
- `Quote`: '

#### Keyboard cursor movement
`ArrowLeft` or `LeftArrow`
`ArrowUp` or `UpArrow`
`ArrowRight` or `RightArrow`
`ArrowDown` or `DownArrow`
`PageUp`
`PageDown`
`Home`
`End`

#### Text Editing
- `Backspace`
- `Tab`
- `Enter`
- `Space`
- `Insert`
- `Delete`

#### Whitespace keys
- `Tab`
- `Enter`
- `Space`

#### Modifiers
- `Shift`
- `Control`
- `Alt`
- `Meta`
- `MetaLeft`
- `MetaRight`
- `ContextMenu`

#### Operational keys
- `CapsLock`
- `Escape` or `Esc`
- `PrintScreen`
- `Pause`
- `Break`
- `NumLock`
- `ScrollLock`
- `AudioVolumeMute`
- `AudioVolumeDown`
- `AudioVolumeUp`
- `LaunchMediaPlayer`
- `LaunchApplication1`
- `LaunchApplication2`

## Ascii
`Ascii` is another helper that can be used in checking character codes.

```javascript
const Ascii = {
  Null: 0,
  HeaderStart: 1,
  TextStart: 2,
  TextEnd: 3,
  TransmissionEnd: 4,
  Enquiry: 5,
  Acknowledge: 6,
  Bell: 7,
  Backspace: 8,
  Tab: 9,
  HorizontalTab: 9,
  LineFeed: 10,
  VerticalTab: 11,
  FormFeed: 12,
  CarriageReturn: 13,
  ShiftOut: 14,
  ShiftIn: 15,
  DataLinkEscape: 16,
  DeviceControl1: 17,
  DeviceControl2: 18,
  DeviceControl3: 19,
  DeviceControl4: 20,
  NegativeAcknowledge: 21,
  Synchronize: 22,
  TransmissionBlockEnd: 23,
  Cancel: 24,
  MediumEnd: 25,
  Substitute: 26,
  Escape: 27,
  FileSeparator: 28,
  GroupSeparator: 29,
  RecordSeparator: 30,
  UnitSeparator: 31,

  Space: 32, //
  ExclamationMark: 33, // !
  QuotationMark: 34, // "
  Sharp: 35, // #
  Pound: 35, // #
  NumberSign: 35, // #
  DollarSign: 36, // $
  PercentSign: 37, // %
  Ampersand: 38, // &
  Apostrophe: 39, // '
  OpenParenthesis: 40, // (
  LeftParenthesis: 40, // (
  CloseParenthesis: 41, // )
  RightParenthesis: 41, // )
  Asterisk: 42, // *
  PlusSign: 43, // +
  Comma: 44, // ,
  Hyphen: 45, // -
  Underline: 45, // -
  Period: 46, // .
  Slash: 47, // /
  Digit0: 48, // 0
  Digit1: 49, // 1
  Digit2: 50, // 2
  Digit3: 51, // 3
  Digit4: 52, // 4
  Digit5: 53, // 5
  Digit6: 54, // 6
  Digit7: 55, // 7
  Digit8: 56, // 8
  Digit9: 57, // 9
  Colon: 58, // :
  Semicolon: 59, // ;
  LessThan: 60, // <
  LT: 60, // <
  EqualSign: 61, // =
  GreaterThan: 62, // >
  GT: 62, // >
  QuestionMark: 63, // ?
  AtSign: 64, // @
  A: 65, // A
  B: 66, // B
  C: 67, // C
  D: 68, // D
  E: 69, // E
  F: 70, // F
  G: 71, // G
  H: 72, // H
  I: 73, // I
  J: 74, // J
  K: 75, // K
  L: 76, // L
  M: 77, // M
  N: 78, // N
  O: 79, // O
  P: 80, // P
  Q: 81, // Q
  R: 82, // R
  S: 83, // S
  T: 84, // T
  U: 85, // U
  V: 86, // V
  W: 87, // W
  X: 88, // X
  Y: 89, // Y
  Z: 90, // Z
  OpenBracket: 91, // [
  LeftBracket: 91, // [
  BackSlash: 92, // \
  CloseBracket: 93, // ]
  RightBracket: 93, // ]
  Caret: 94, // ^
  Underscore: 95, // _
  GraveAccent: 96, // `
  Backtick: 96, // `
  BackQuote: 96, // `
  Grave: 96, // `
  a: 97, // a
  b: 98, // b
  c: 99, // c
  d: 100, // d
  e: 101, // e
  f: 102, // f
  g: 103, // g
  h: 104, // h
  i: 105, // i
  j: 106, // j
  k: 107, // k
  l: 108, // l
  m: 109, // m
  n: 110, // n
  o: 111, // o
  p: 112, // p
  q: 113, // q
  r: 114, // r
  s: 115, // s
  t: 116, // t
  u: 117, // u
  v: 118, // v
  w: 119, // w
  x: 120, // x
  y: 121, // y
  z: 122, // z
  OpenBrace: 123, // {
  LeftBrace: 123, // {
  VerticalBar: 124, // |
  CloseBrace: 125, // }
  RightBrace: 125, // }
  Tilde: 126, // ~
}
```

As an example, suppose we want to write a function named `isNumeric()` that checks whether a string is numeric.
This can be performed with a regex like `/^\d+$/`. That's true. This is just an example.

manual checking character codes
```javascript
function isNumeric(value) {
    let result = true;

    for (let i = 0; i < value.length; i++) {
        const code = ch.charCodeAt(i);

        if (!(code >= 48 && code <= 57)) {  // 0-9
            result = false;
            break;
        }
    }

    return result
}
```

Using `Ascii` object
```javascript
function isNumeric(value) {
    let result = true;

    for (let i = 0; i < value.length; i++) {
        const code = ch.charCodeAt(i);

        if (!(code >= Ascii.Digit0 && code <= Ascii.Digit)) {  // 0-9
            result = false;
            break;
        }
    }

    return result
}
```

## `isKey(e, shortcutKey)`
`isKey()` is a helper function that receives a keyboard event and a shortcut and checks whether the shortcut key is pressed or found in the event.

Example:
```javascript
function onKeyDown(e) {
    if (isKey(e, 'ctrl+c')) {
        ...
    } else if (isKey(e, 'ctrl+v')) {
        ...
    }
}
```

It should be noted that `isKey('ctrl+c')` also accepts `ctrl+shit+c`, `alt+ctrl+c` and `alt+shift+ctrl+c`.

If we inted to accept only `ctrl+c`, we should negate `alt` and `shift` using `!`.

```javascript
isKey(e, '!alt+!shift+ctrl+c')   // only ctrl+c, not ctrl+shift+c, ctrl+alt+c or ctrl+alt+shift+c
```

Using `|` character, it can also check multiple shortcut keys.

```javascript
function onKeyDown(e) {
    if (isKey(e, 'ctrl+c | shift+insert')) {
        ...
    }
}
```

Using `?` we can make a key optional.

```javascript
isKey(e, 'ctrl+shift?+k')   // ctrl+k or ctrl+shift+k
```

