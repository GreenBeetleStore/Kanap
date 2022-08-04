Evolució del script: index.js

A la línia 2; declaro una constant anomenada “urlhost” on es guarda com a valor l'adreça url de l'API (http://localhost:3000/api/products/), des de on recolliré les dades (diferents característiques del productes en estoc: colors, _id, name, price, imageUrl, description, altTxt).

A la línia 5; he creat una funció anònima que captura les dades dels productes i les guarda dintre la variable “dadesRecull” de la mateixa línia. Dintre d’aquesta funció utilitzo (fetch) que és una API; “Interfície de Programació d’Aplicacions” que ens proporciona l’accés i la possibilitat de manipular la canalització HTML, com son les sol•licituds i les respostes. Fetch fa una crida a la constant “urlhost” de la línia 2 per contactar la url de connexió de l’API i llavors, a la línia 7, recuperem la primera (promesa en “resposta”) tractant la resposta obtinguda, formatant-la al format “resposta.json”.

A la següent línia 8, recuperem la segona (promesa en “dades”) enviant aquestes dades a la “console.log” per a que es mostrin dintre la consola web o del intèrpret JavaScript:

1.	(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
1.	0: {colors: Array(3), _id: '107fb5b75607497b96722bda5b504926', name: 'Kanap Sinopé', price: 1849, imageUrl: 'http://localhost:3000/images/kanap01.jpeg', …}
2.	1: {colors: Array(2), _id: '415b7cacb65d43b2b5c1ff70f3393ad1', name: 'Kanap Cyllène', price: 4499, imageUrl: 'http://localhost:3000/images/kanap02.jpeg', …}
3.	2: {colors: Array(3), _id: '055743915a544fde83cfdfc904935ee7', name: 'Kanap Calycé', price: 3199, imageUrl: 'http://localhost:3000/images/kanap03.jpeg', …}
4.	3: {colors: Array(2), _id: 'a557292fe5814ea2b15c6ef4bd73ed83', name: 'Kanap Autonoé', price: 1499, imageUrl: 'http://localhost:3000/images/kanap04.jpeg', …}
5.	4: {colors: Array(3), _id: '8906dfda133f4c20a9d0e34f18adcf06', name: 'Kanap Eurydomé', price: 2249, imageUrl: 'http://localhost:3000/images/kanap05.jpeg', …}
6.	5: {colors: Array(2), _id: '77711f0e466b4ddf953f677d30b0efc9', name: 'Kanap Hélicé', price: 999, imageUrl: 'http://localhost:3000/images/kanap06.jpeg', …}
7.	6: {colors: Array(2), _id: '034707184e8e4eefb46400b5a3774b5f', name: 'Kanap Thyoné', price: 1999, imageUrl: 'http://localhost:3000/images/kanap07.jpeg', …}
8.	7: {colors: Array(4), _id: 'a6ec5b49bd164d7fbe10f37b6363f9fb', name: 'Kanap orthosie', price: 3999, imageUrl: 'http://localhost:3000/images/kanap08.jpeg', …}
9.	length: 8


Tot seguit declaro, a la línia 11, una variable element “caracteristiques” que es converteix en una “Array” en la qual podem fer una recerca específica amb el paràmetre “getElementById” i localitzem l’id “items” del nostre document “index.html”(línia 51), això ens permet d’identificar i assignar els diferents valors dels productes continguts dintre l’Array.

Ara que ja disposem de les dades dels productes, i d’un mitjà de reconèixer-les, creem un bucle amb la sentència “for”(línia 12) per gestionar i distribuir dintre del nostre html les dades específiques individualitzades per a cada identitat de producte “const identitatProducte” introduint-les a cada identificador html, ja sigui; un id, una class o una etiqueta.  Exemple:

![image](https://user-images.githubusercontent.com/97419459/182845409-fc3df698-d76d-4558-8d1f-0f3793a75ced.png)

 
El bucle continua funcionant i, a la línia 20, cridem la variable element “caracteristiques” i amb la propietat “.innerHTML” obtenim o establim la sintaxi HTML que descriu els descendents de l'element per fer una incrementació dintre de la constant “identitatProducte” per continuar el bucle mentre sigui necessari depenent de l’allargada “length” de la nostra Array, que definirà quan el bucle ha acabat amb tots els productes en estoc.

Per acabar, fem una crida a la variable “dadesRecull” per que estigui activa i actualitzada.
