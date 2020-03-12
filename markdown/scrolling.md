<!-- .slide: data-background="images/scrolling.jpg" -->

## Scrolling

---

## Scrollbar Styling

```css
              /* thumb and track color */
scrollbar-color: #7f7f7f transparent;
scrollbar-width: thin;
```

---

## Smooth Scrolling

![Smooth Scrolling Example](images/scroll-behavior.gif) <!-- .element: style="min-width: 0; width: auto; height: 300px" -->

```css
.scroll-container {
  scroll-behavior: smooth;
}
```

---

## Scroll Snapping

```css
.scroller {
   /* snap mandatory on horizontal axis  */
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
```

<a href="https://snap.glitch.me/carousel.html" target="_blank">Demo</a>

---

<iframe src="https://cdpn.io/Schepp/debug/WNbQByE/VJMxxOXjqLQM" style="width: 800px; height: 600px"></iframe>

<a href="https://codepen.io/Schepp/pen/WNbQByE?editors=1100" target="_blank">Code</a>
