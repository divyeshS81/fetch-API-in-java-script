fetch('https://fakestoreapi.com/products').then((data)=>{

return data.json();
}).then((complateData)=>{

  let data1="";
  complateData.map((values)=>{
    console.log(values)
    data1 += `<div class="card">
    <img src=${values.image}  alt="img" class="images">
    <h1 class="title">${values.title}</h1>
    <p class="category">${values.category}</p>
    <p class="rating">${values.rating.rate}</p>
    <p>${values.description}}</p>
    <p class="stock">${values.rating.count}</p>
    <P class="price">${values.price}</p>
</div>`
  });

  document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
  console.log(err);
})