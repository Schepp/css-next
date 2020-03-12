<!-- .slide: data-background="images/architecture.jpg" -->

## Architecture
---

## Minimalistic Reset.css

```css
* {
  all: initial;
}
```

> The `all` shorthand CSS property resets all of an element's properties. The `initial` value applies on a per-property basis, and for `display` would be `inline`.

---

## Stop that Style Bleed!

```css
.third-party-widget * {
  all: revert;
}
```
