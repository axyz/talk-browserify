# CommonJS Modules & Browserify

---

## CommonJS Modules - Pro
- Eleganza e leggibilità
- Enorme libreria di Node.js
- Risoluzione dipendenze cicliche
- Vicino alla sintassi ECMAScript 6

----

## CommonJS Modules - Contro
- Server side oriented
- Mancanza del loading asincrono in stile AMD

----

## Nel prossimo futuro
- ECMAScript 6 Modules
- Best of two worlds

---

# Un po’ di codice

----

## CommonJS syntax
Dichiarazione:
```JavaScript
/* roma.js */
module.exports.hello = function() {
    console.log(“ciao a tutti”);
}
```
Importazione:
```JavaScript
/* index.js */
var romajs = require(‘./roma.js’);

romajs.hello();
```

----

## AMD syntax
Dichiarazione:
```JavaScript
/* roma.js */
define(function() {
  return {
    hello: function() {
      console.log(“ciao a tutti”);
    }
  }
});
```
Importazione:
```JavaScript
/* index.js */
require([‘roma’], function(romajs) {
  romajs.hello();
});
```

----

## ECMAScript 6 syntax
Dichiarazione:
```JavaScript
/* roma.js */
export function hello() {
  console.log(“ciao a tutti”);
}
```
Importazione:
```JavaScript
/* index.js */
import * as romajs from ‘roma’;

romajs.hello();
```

---

![browserify](img/browserify.png)
### Browserify lets you require('modules') in the browser by bundling up all of your dependencies.

----

- Possibilità di utilizzare i pacchetti presenti su npm nel browser
- Molti pacchetti core di Node.js che utilizzano funzionalità non presenti nel browser
  vengono importati in un’apposita versione compatibile
- Tutto l’albero delle dipendenze viene attraversato e tutto il necessario viene
  racchiuso in un singolo file

----

# Transofrms
- Plugins che precompilano il codice prima di mandarlo in output
- coffeify, reactify, debowerify, deamdify, browserify-shim e molti altri

----

# Strumenti disponibili
- browserify da linea di comando
- compatibilità con grunt e gulp
- watchify
- beefy
- requirebin.com
