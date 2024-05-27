# touch-move

This pacakge exports `bindDrag`、`bindTouch` and `bindMove` functions

```typescript
// This parameter will limit the distance between the dragged element and the page boundary.
export type Bound = Record<'top' | 'right' | 'bottom' | 'left', number>
export declare function bindDrag(
  el: HTMLElement,
  boundInfo: Partial<Bound>,
): {
  remvoeDragStart: () => void
  removeDragOver: () => void
  removeDragEnd: () => void
}
export declare function bindTouch(
  el: HTMLElement,
  boundInfo: Partial<Bound>,
): {
  removeTouchStart: () => void
  removeTouchMove: () => void
}
export default function bindMove(
  el: HTMLElement,
  boundInfo: Partial<Bound>,
):
  | {
      remvoeDragStart: () => void
      removeDragOver: () => void
      removeDragEnd: () => void
    }
  | {
      removeTouchStart: () => void
      removeTouchMove: () => void
    }
```

### bindDrag

This function will bind `drag` event for `dom` element, so that you can realize drag effect of elements on a `PC webpage`.

### bindTouch

This function will bind `touchMove` event for `dom` element, so that you can realize drag effect of elements on a `Mobile webpage`.

### bindMove

`bindMove` combine `bindDrag` and `bindTouch`, it will select one of them to realize `'touchMove'` event based on media query result.

```javascript
// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer
window.matchMedia('(pointer: coarse)').matches
```

```javascript
import bindMove from 'touch-move'
bindMove(el, { top: 200 })
```
