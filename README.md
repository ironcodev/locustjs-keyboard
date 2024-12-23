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

Using `@locustjs/keyboard`
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
        if (e.shiftKey || e.keyCode == Keys.CapsLock) {
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
`PageUp`
`PageDown`
`End`
`Home`
`ArrowLeft` or `LeftArrow`
`ArrowUp` or `UpArrow`
`ArrowRight` or `RightArrow`
`ArrowDown` or `DownArrow`

#### Text Editing
- `Backspace`
- `Tab`
- `Enter`
- `Space`
- `Insert`
- `Delete`

#### Other
