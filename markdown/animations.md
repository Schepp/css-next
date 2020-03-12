<!-- .slide: data-background="images/animations.jpg" -->

## Animations

---

## Scroll-linked Animations

<div class="side-by-side">

```css
@keyframes progress {
  from { 
    width: 0;
  }
  to { 
    width: 100%;
  }
}
```

```css
.read-progress {
  position: fixed;
  top: 0;
  width: 0;
  height: 2px;
  background-color: red;
  animation-name: progress 1s linear;
  /* Assume the HTML element has id 'root' */
  animation-timeline: 
    scroll(element(#root), vertical);
}
```

</div>

---

## CSS Properties & Values

<style>
@keyframes chart-open {
  from { --multiply: 0; }
  to   { --multiply: 1; }
}

.chart {
  width: 250px;
  height: 250px;
  animation: chart-open 1000ms infinite;
  background-image: conic-gradient(
    blue calc(var(--multiply) * 40%), 
    red calc(var(--multiply) * 40%), 
    red calc(var(--multiply) * 70%), 
    transparent calc(var(--multiply) * 70%)
  );
  border-radius: 50%;
  filter: drop-shadow(10px 10px 10px #000);
}

</style>

<div class="side-by-side">

```css
@keyframes chart-open {
  from { --multiply: 0; }
  to   { --multiply: 1; }
}
.chart {
  animation: chart-open 1000ms infinite;
  background-image: conic-gradient(
    blue calc(var(--multiply) * 40%), 
    red calc(var(--multiply) * 40%), 
    red calc(var(--multiply) * 70%), 
    transparent calc(var(--multiply) * 70%));
}
```

<div class="chart"></div>

</div>

---

<div class="side-by-side">

```js
CSS.registerProperty({
  name: '--multiply',
  syntax: '<number>',
  inherits: false,
  initialValue: '0'
});
```

```css
@property --multiply {
  syntax: '<number>';
  inherits: false;
  initialValue: '0';
}
```

</div>

---

## CSS Motion Path

```css
@keyframes move {
  from { offset-distance: 0% }
  to   { offset-distance: 100%; }
}
.animated {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px; height: 40px; background: cyan;
}
```

<iframe src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/CSS_Motion_Path$samples/Basic_example?revision=1590530" style="width: 300px; height: 200px; margin-top: -50px; position: relative; z-index: 1"></iframe>