# Semester Project 2 - Mercury Shoes

![image](https://res.cloudinary.com/dhd2paq70/image/upload/v1654681036/mercury_lyf9vl.jpg)

A simple overview of the use/purpose of the project.

## Description

This project is an assignment from Noroff's Frontend course second year.

Mercury shoes is an e-commerce site selling running shoes. The site is coded using HTML and vanilla Javascript, and is styled using Sass. The site has a costumer facing side with basket functionality using local storage to store data, and also an admin facing side, where products can be added, edited and deleted. An API from Strapi hosted on Heroku is used to store and fetch content data.

<h2>Assignment requirements:</h2>

<h3>Customer facing pages</h3>

<h4>Homepage:</h4>

The home page must include:

- A hero banner with an image that is uploaded to Strapi.
- A list of featured products. On Strapi products can be marked as ‘featured’. When a product is marked as ‘featured’ it should be displayed on the homepage.

<h4>Products page:</h4>

The products page must include:

- A list of all products added to Strapi. Each product must display its title, price and image. The product should link to its products detail page.
- A search text box. When searching (filtering), only the products that include the searched text in their title or description should be listed.

<h4>Product details page:</h4>

This page is reached by a user clicking on a product on the product list page. The product details page must include:

- title
- description
- image
- price
- an add to cart button. This will toggle the product in and out of a cart array stored in local storage.

<h4>Cart/Basket page:</h4>

The cart/basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.

Each product in the cart must display:

- title
- price
- a link to the product view page
- image

After the list of products, display the total price of all the products in the cart.

<h3>Admin section</h3>

The admin section (apart from the log in form) must only be accessible to logged in admin users and must include the following features:

<h4>Login/logout:</h4>

Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.

When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.

<h4>Add/edit products:</h4>

For adding/editing product images use either of these 2 methods:

- Use a file upload field to upload images to Strapi, or
- Use a text input that allows a URL to be entered. This allows an image from an external URL to be used as the product image.

Create a form that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.

Allow products to be deleted. Before a product is deleted you must display a confirmation dialog. The product should only be deleted if the user confirms.

## Built With

- HTML
- Javascript
- Sass


## API

- [Strapi](https://strapi.io)
- [Heroku](https://heroku.com)

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

Here you can detail any information you want to provide regarding contributing to the project. For big projects you will usually have a separate `CONTRIBUTING.md` and link to it, but for smaller projects you can simply include instructions here. These instructions can simply detail the process you want a person to take, such as to make sure to open a pull request so code can be reviewed.

## Contact

Get in touch at:

[LinkedIn](https://www.linkedin.com/in/tommy-j-16b56678/)


## Acknowledgments

This is where you can add any acknowledgements if you'd like, such as to people who have helped you or any code snippets you'd like to mention. You can delete this section if you don't have any acknowledgements to make.
