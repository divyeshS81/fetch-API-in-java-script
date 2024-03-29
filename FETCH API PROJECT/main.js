fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
            const productContainer = document.getElementById('productContainer');
            data.forEach(product => {
                  const card = document.createElement('div');
                  card.classList.add('card');

                  const cardInner = document.createElement('div');
                  cardInner.classList.add('card-inner');

                  const front = document.createElement('div');
                  front.classList.add('front');
                  
                  const imgContainer = document.createElement('div');
                  imgContainer.classList.add('img-container');

                  const img = document.createElement('img');
                  img.src = product.image;
                  img.alt = product.title;
                  img.style.width = '200px';
                  img.style.height = '200px';
                  imgContainer.appendChild(img);
                  front.appendChild(imgContainer);

                  const title = document.createElement('p');
                  title.textContent = `Title:- ${product.title}`;
                  front.appendChild(title);

                  const category = document.createElement('p');
                  category.textContent = `Category:- ${product.category}`;
                  front.appendChild(category);

                  const price = document.createElement('p');
                  price.textContent = `Price:-$${product.price}`;
                  front.appendChild(price);

                  const rating = document.createElement('p');
                  rating.textContent = `Rating:- ${product.rating.rate} `;
                  front.appendChild(rating);


                  
                  // const addButton = document.createElement('button');
                  // addButton.textContent = 'Add to Cart';
                  // addButton.addEventListener('click', () => addToCart(item));
                  // itemElement.appendChild(addButton);
                  ;

                  const back = document.createElement('div');
                  back.classList.add('back');

                  const description = document.createElement('p');
                  description.textContent = `Description:- ${product.description}`;
                  back.appendChild(description);

                  const stock = document.createElement('p');
                  stock.textContent = `Stock:- ${product.rating.count}`;
                  back.appendChild(stock);
                  
                  const buttonContainer = document.createElement('div');
                  buttonContainer.classList.add('button-container');

                  const button = document.createElement('button');
                  button.textContent = `ADD TO CART`;
                  button.addEventListener('click',() => addToCart(items))
                  button.style.height = '40px';
                  button.style.width = '120px';
                  button.style.borderRadius = '10px';
                  button.style.backgroundColor = 'Black';
                  button.style.color = 'white';
                  button.style.marginLeft = '50px';
                  // button.style.marginTop= '10px'
                  back.appendChild(button);
                  ;

                  cardInner.appendChild(front);
                  cardInner.appendChild(back);
                  card.appendChild(cardInner);
                  productContainer.appendChild(card);
            });

      })      
      .catch(error => console.error('Error fetching data:', error));
