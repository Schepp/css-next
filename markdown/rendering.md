<!-- .slide: data-background="images/painted-canvas.jpg" -->

## Rendering

---

<video autoplay muted>
<source data-src="images/scrolling-homepage-desktop.mp4" type="video/mp4" />
</video>

---

## Ergebnis: Lange Renderzeiten

<!-- .slide: data-transition="fade" -->

![Chrome Profilder zeigt knapp 14 Sekunden reine Renderzeit](images/display-locking-off.png)

<p>&nbsp;</p>
---

## Ergebnis: Lange Renderzeiten

<!-- .slide: data-transition="fade" -->

![Chrome Profiler zeigt knapp 14 Sekunden reine Renderzeit, hervorgehoben](images/display-locking-off-highlighted.png)

<p class="blink fragment">14 SEKUNDEN!!! 😭</p>

---

## Display Locking!

> Render Subtree (a.k.a. Display Locking) is designed to allow developers and browsers to easily scale to large amount of content and control when rendering work happens.

```css
section {
    render-subtree: invisible;
}
```

---

<div class="perspective">
<span class="fragment"></span>
<img src="images/homepage-display-lock.png" alt="Page with active Display Lock" class="zoom">
</div>

---

## Vorher/Nachher-Vergleich

<!-- .slide: data-transition="fade" -->

vorher:  
![Chrome Profiler zeigt knapp 14 Sekunden reine Renderzeit, hervorgehoben](images/display-locking-off-highlighted.png)

---

## Vorher/Nachher-Vergleich

<!-- .slide: data-transition="fade" -->

nachher:  
![Chrome Profiler zeigt knapp 7 Sekunden reine Renderzeit, hervorgehoben](images/display-locking-on-highlighted.png)
