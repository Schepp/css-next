<!-- .slide: data-background="images/park.jpg" -->

## Convenience Features

---
## Floats

<style>
@keyframes pulsate {
  0% {
    border-width: 50px;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  15% {
    border-width: 50px;
    opacity: 0.75;
    transform: translate(-50%, -50%) scale(1);
  }

  70%,
  95% {
    border-width: 0;
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    border-width: 0;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}

#css-floats [class] {
  position: relative;
  outline: #2aa19866 4px solid;
}

#css-floats [class]::before {
  content: attr(class);
  position: absolute;
  top: 0;
  left: 0;
  background: #2aa198;
}

#css-floats img {
  margin-right: 10px;
}

#css-floats a {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  padding: 0 5px;
  background-color: #933;
  color: #fff;
}

#css-floats a:hover::before {
  content: attr(href);
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 200px;
  box-sizing: border-box;
  background: #933;
  color: #933;
  border: 50px solid #933;
  border-radius: 50%;
  font-size: 0;
  animation-name: pulsate;
  animation-duration: 1.25s;
  animation-timing-function: cubic-bezier(0.21, 0.61, 0.35, 1);
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
</style>

<div class="side-by-side">

<div id="css-floats" style="background: #fff; padding: 10px; border: 1px solid #000; text-align: left">
  <div class="teaser">
    <img src="https://placehold.it/150x200" 
      width="150" height="200" style="min-width: 150px; height: 200px">Lorem ipsum dolor sit amet. <a href="#">read more</a>
  </div>
  <div class="teaser">
    <img src="https://placehold.it/150x200" 
      width="150" height="200" style="min-width: 150px; height: 200px">Labore et dolore magna aliquyam erat. <a href="#">read more</a>
  </div>
</div>

<pre style="width: 600px"><code class="liveCoding css" data-livecoding-id="css-floats" contenteditable>.teaser {
}

img {
  float: left;
}</code></pre>

</div>
---

## Semi-Transparent Colors

<style>
#css-alpha-hex .circle {
  width: 500px;
  height: 500px;
  border-radius: 50%;
}
</style>

<div class="side-by-side">

<div id="css-alpha-hex">
  <div class="circle"></div>
</div>

<pre><code class="liveCoding css" data-livecoding-id="css-alpha-hex" contenteditable>.circle {
  background: rgba(255, 0, 0, 0.5);
}
</code></pre>

</div>

---

## Gradient Syntax [⚡](snippets/css-gradient-1.txt)[⚡](snippets/css-gradient-2.txt)

<style>
#css-gradient .stripes {
  width: 100%;
  height: 50px;
}
</style>

<div id="css-gradient" style="background: #fff; padding: 10px; border: 1px solid #000; text-align: left">
  <div class="stripes"></div>
</div>

<pre><code class="liveCoding css" data-livecoding-id="css-gradient" contenteditable>.stripes { background: linear-gradient(90deg,
                       #5461c8 12.5%,
        #c724b1 12.5%, #c724b1 25%,
        #e4002b 25%,   #e4002b 37.5%,
        #ff6900 37.5%, #ff6900 50%,
        #f6be00 50%,   #f6be00 62.5%,
        #97d700 62.5%, #97d700 75%,
        #00ab84 75%,   #00ab84 87.5%,
        #00a3e0 87.5%
      );
}
</code></pre>
---

## attr() 2.0

<style>
  #css-attr {
    margin-bottom: 0.5em;
  }
  #css-attr div {
    margin-bottom: 0.2em;
    padding-right: 10px;
    background: #2aa198;
    color: #fff;
    font-size: 0.6em;
    line-height: 2;
    text-align: right;
    filter: drop-shadow(0 0 4px rgba(255,255,255,0.5));
  }
  
  #css-attr div::before {
    display: inline;
    content: attr(data-length);
  }
  
  #css-attr div:nth-child(1) {
    width: 12em;
  }
  
  #css-attr div:nth-child(2) {
    width: 5em;
  }
  
  #css-attr div:nth-child(3) {
    width: 19em;
  }
</style>

<div id="css-attr">
  <div data-length="12"></div>
  <div data-length="5"></div>
  <div data-length="19"></div>
</div>

<div class="side-by-side">

```html
<ul>
  <li data-length="12"/>
  <li data-length="5"/>
  <li data-length="19"/>
</ul>
```

```css
li {
  width: attr(data-length em, 0);
}

li::before {
  content: attr(data-length);
}
```

</div>

---

## Media Queries

```css
@media (max-width: 30em) { ... }
@media (width <= 30em) { ... }
```

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
@media (30em <= width <= 50em ) { ... }
```

```css
@media (not(hover)) { ... }
```

```css
@media (not (color)) or (hover) { ... }
```
