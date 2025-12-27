document.querySelectorAll("form .field").forEach(function(e){var l,a=e.querySelector("input"),c=(l=a.name.replace(/([A-Z])/g," $1").toLowerCase())[0].toUpperCase()+l.slice(1);e.insertAdjacentHTML("afterbegin",'<label class="field-label" for="'.concat(a.id,'">').concat(c,"</label>")),a.placeholder=c});
//# sourceMappingURL=index.00558e6a.js.map
