cltvo-css
=========

CSS responsive framework by El Cultivo

## Customizable

Usa el mínimo de estilo para que no tengas que modificar ni sobreescribir ni una línea.

## Comenzar a usar

Ultraligero está basado en SASS pero no necesita compass ni alguna otra gem. Por lo que se lleva a la perfección con [CodeKit](https://incident57.com/codekit/).

1. Instala SASS
2. Descarga o clona Ultraligero
3. Configura las variables básicas en "_base.scss"
4. Añade tus estilos en "ultraligero.scss"
5. ¡Compila y listo!

## Configuración
```SASS
$base: 17;		// Tamaño base. Todos los tamaños de ajustan a esta unidad.
$base-px: 17px;	// Tamaño base en pixeles
$cols: 12;		// Número de columnas en la retícula
```

## Creditos
Insirado en Frameworks como [Gumpy](http://gumbyframework.com/) y retículas tipográficas usando [Modular Scale](http://modularscale.com/) y [diseños flat](http://fltdsgn.com/)

Enjoy!

/**
* Ultraligero Framework
* ---------------------
*
* Desarrollado por El Cultivo
* http://elcultivo.mx
*
*
*
* Usar ese archivo para customizar estilos
* 
*/

ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages. This is why it rocks:

- **Demo of [ChrisPolis version](http://bytemuse.com/scrollIt.js)
- **Easy to implement:** One JS call, just put data- attributes on the DOM
- **Lightweight:** ~1kb minified
- **Active Class:** Your navigation is updated automatically
- **Configurable:** Set the animation easing, duration, callbacks and more
- **Keyboard Navigation:** Press the up and down keys to move...

## Usage

1. Include jQuery and scrollIt.js
```html
<script src="jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="scrollIt.js" type="text/javascript"></script>
```

2. Put a data-scroll-index attribute on each section
```html
<div data-scroll-index="0">..content..</div>
<div data-scroll-index="1">...</div>
<div data-scroll-index="2">...</div>
```

3. Put corresponding data-scroll-nav attributes on each nav 
```html
<a data-scroll-nav="0">About</a>
<a data-scroll-nav="1">Usage</a>
<a data-scroll-nav="2">Options</a>
```

4. For links to sections, put on a data-scroll-goto attribute
```html
<a data-scroll-goto="0">Back to top</a>
```

5. Call scrollIt()
```JavaScript
$(function(){
  $.scrollIt();
});
```

## Options

To customize scrollIt.js, simply pass in an options object: (defaults shown)

```JavaScript
$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});
```

## Credit
Created by [@ChrisPolis](http://twitter.com/chrispolis), *[blog](http://bytemuse.com)*

Forked by [Rbto](https://github.com/cmpolis/scrollIt.js)

Uses unevent.js by [Yannick Albert](https://github.com/yckart/jquery.unevent.js)

Feel free to use, share and fork.

Enjoy!