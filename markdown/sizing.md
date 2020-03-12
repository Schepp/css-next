<!-- .slide: data-background="images/sizing.jpg" -->

## Sizing
---

## Bye, bye, `min-width` & `max-width`

```css
img {
  width: 600px;
  max-width: 100%;
  height: auto;
}
```

---

```css
img {
  width: min(600px, 100%);
  height: auto;
}
```

> The `min()` CSS function lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value

---

## Responsive Font Sizes

```css
html { 
  font-size: calc(1em + 1vw);
}
```

---

```css
html { 
  font-size: clamp(14px, 1vw, 24px);
}
```

> The `clamp()` CSS function clamps a value between an upper and lower bound.

---

## Intrinsic & Extrinsic Width

<style>
  #css-intrinsic-extrinsic p {
    marin-bottom: 0.5em;
    border: 1px solid;
  }
</style>

<pre style="width: 600px"><code class="liveCoding css" data-livecoding-id="css-intrinsic-extrinsic" contenteditable>p {  }</code></pre>

<div id="css-intrinsic-extrinsic">
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
</div>

---

## Aspect Ratio

```css
iframe { aspect-ratio: 4 / 3 }
```

<img src="https://placehold.it/400x300" width="400" height="300">