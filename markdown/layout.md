<!-- .slide: data-background="images/layout.jpg" -->

## Layout
---

## display: contents

> `display: contents` becomes useful if you want to add some element because it makes sense in terms of document semantics, but doesn’t in terms of display.

---

<style>
#css-display-contents {
  line-height: 40px;
}

#css-display-contents h1 {
  display: inline;
  margin: 0;
  font-size: 0;
}

#css-display-contents img {
  width: 250px;
  min-width: 0;
  height: auto;
  margin: 0;
}

#css-display-contents li {
  list-style: none;
}

#css-display-contents [data-tag]:hover {
  position: relative;
  outline: #2aa19866 4px solid;
  transition: all 0.3s;
}

#css-display-contents [data-tag]:hover::before {
  content: attr(data-tag);
  position: absolute;
  bottom: 100%;
  left: 0;
  padding: 0 5px;
  background: #2aa198;
  color: #fff;
  transition: all 0.3s;
}

#css-display-contents nav[data-tag]:hover::before {
  left: 80px;
}

#css-display-contents ul[data-tag]:hover::before {
  left: 120px;
}
</style>

<div id="css-display-contents" style="background: #fff; padding: 10px; border: 1px solid #000; text-align: left">
<header data-tag="header">
  <h1><img src="images/logo.svg" class="transparent"></h1>
  <nav data-tag="nav"><ul data-tag="ul">
    <li><a href="#">NRW</a></li>
    <li><a href="#">Politik</a></li>
    <li><a href="#">Sport</a></li>
  </ul></nav>
</header>
</div>

<div class="side-by-side">

```html
<header>
 <h1><img src=logo.svg></h1>
 <nav><ul>
  <li><a href=#>NRW</a></li>
  <li><a href=#>Politik</a></li>
  <li><a href=#>Sport</a></li>
 </ul></nav>
</header>
```

<pre style="width: 600px"><code class="liveCoding css" data-livecoding-id="css-display-contents" contenteditable>header, nav, ul {
  display: flex;
}</code></pre>

</div>

---

> Due to a bug in browsers this will currently remove the element from the accessibility tree — screen readers will not look at what's inside.
>

---

## CSS Fragmentation Module Level 3

> This module describes the fragmentation model that partitions a flow into pages, columns, or regions. It builds on the Page model module and introduces and defines the fragmentation model. It adds functionality for pagination, breaking variable fragment size and orientation, widows and orphans.

---

## CSS Multicolumn

![CSS Multicolumn Layout Example](images/multicolumn.png)

---

## CSS Regions

![CSS Regions Flow Mechanic](images/regions.jpg)

---

## CSS Paged Media

![Amazon Kindle eBook](images/ebook.png) <!-- .element: class="transparent" style="min-width: 0" -->

---

## CSS Page Floats

![An image floated to the top of a page](images/float-top.png) <!-- .element: class="transparent" style="min-width: 0; width: auto; height: 300px" -->

```css
img {
  float-reference: page;
  float: top;
}
```

---

![Images floated so that there are no orphans or widows](images/float-snap-block.png) <!-- .element: class="transparent" style="min-width: 0; width: auto; height: 400px" -->

```css
img {
  float-reference: page;
  float: snap-block;
}
```

---

![A button floated to the bottom right of an element](images/vertical-floats.jpg) <!-- .element: class="transparent" style="min-width: 0; width: auto; height: 600px" -->

---

<!-- .slide: data-transition="fade" -->

## CSS Page Floats

<div class="side-by-side">

<div style="width: 800px">


```css
.container {
  float-container: true;
}

button {
  float-reference: float-container;
  float: block-end;
}



```

</div>

![A button floated to the bottom right of an element](images/vertical-floats.jpg) <!-- .element: class="transparent" style="min-width: 0; width: 450px" -->

</div>

---

<!-- .slide: data-transition="fade" -->

## CSS Exclusions

<div class="side-by-side">

<div style="width: 800px">

```css
.container {
  position: relative;
}

button {
  position: absolute;
  right: 0;
  bottom: 0;
  wrap-flow: both;
}
```

</div>

![A button floated to the bottom right of an element](images/vertical-floats.jpg) <!-- .element: class="transparent" style="min-width: 0; width: 450px" -->

</div>

---

## CSS Exclusions

![An example of a CSS exclusion](images/exclusions.png)

---

<div class="side-by-side">

<div>

## CSS Layout API

```js
CSS.layoutWorklet
   .addModule('masonry.js');
```

<pre style="width: 600px"><code class="liveCoding css" data-livecoding-id="css-layout-api-masonry" contenteditable>.masonry {
  display: layout(masonry);
  --padding: 20;
  --columns: 3;
}</code></pre>

</div>

<style>
  #css-layout-api-masonry .masonry > div {
    overflow: hidden;
    padding: 10px;
    background: #eee;
    box-shadow: 0 0 5px #666;
    font-size: 0.3em;
  }
</style>

<div id="css-layout-api-masonry" style="background: #fff; padding: 10px; border: 1px solid #000; text-align: left">
<div class="masonry"> <div>1 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret. Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.</div> <div>2 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.</div> <div>3 Lorem ipsum dolor sit amet.</div> <div>4 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.</div> <div>5 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an.</div> <div>6 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea.</div> <div>7 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret.</div> <div>8 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix.</div> <div>9 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea..</div> </div>
</div>

</div>

---

<div class="side-by-side">

<div>

## CSS Layout API

```js
CSS.layoutWorklet
   .addModule('random.js');
```

<pre style="width: 600px"><code class="liveCoding css" data-livecoding-id="css-layout-api-random" contenteditable>.random {
  display: layout(random);
}</code></pre>

</div>

<style>
  #css-layout-api-random .random > div {
    position: relative;
    overflow: hidden;
    width: 2em;
    height: 2em;
    background: #eee;
    box-shadow: 0 0 5px #666;
    line-height: 2;
    text-align: center;
  }
</style>

<div id="css-layout-api-random" style="background: #fff; padding: 10px; border: 1px solid #000; text-align: left">
  <div class="random"> 
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </div>
</div>

</div>

---

```js
registerLayout('random', class {
  async intrinsicSizes() {}
  async layout(children, edges, constraintSpace, styles) {
    const childFragments = [];
    for(const child of children) {
      const childFragment = await child.layoutNextFragment();
      childFragment.inlineOffset = Math.random() * constraintSpace.fixedInlineSize;
      childFragment.blockOffset = Math.random() * constraintSpace.fixedBlockSize;
      childFragments.push(childFragment);
    }

    return { childFragments };
  }
});
```