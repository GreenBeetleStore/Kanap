fetch
var elementosAcumules=0;
var elementos=[1, 2, 3, 4, 5, 6, 7, 8,];
      for(var i=0; i<elementos.length; i++){
            // elementosAcumules=elementos[i]+elementosAcumules;
            elementosAcumules+=elementos[i];
            document.getElementById("items").innerHTML+=`<a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap ${elementos[i]} </h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
            </a>`;      
      }
      // document.getElementById("items").innerText=elementosAcumules;
