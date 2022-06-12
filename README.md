# Semester Project 2 - Mercury Shoes

![image](https://res.cloudinary.com/dhd2paq70/image/upload/v1654681036/mercury_lyf9vl.jpg)

The projects hero at the homepage.

## Description

This project is an assignment from Noroff's Frontend course second year and was delivered in December 2021. The timeframe was 5 weeks, and the project requirements are listed in the next section.

Mercury shoes is an e-commerce site selling running shoes. The site is coded using HTML and vanilla Javascript, and is styled using Sass. The site has a costumer facing side with basket functionality using local storage to store data, and also an admin facing side, where products can be added, edited and deleted. An API from Strapi hosted on Heroku is used to store and fetch product data.

#### Sign in as admin:
- Username: admin
- Password: Pass1234

## Assignment requirements:

### Customer facing pages

#### Homepage:

The home page must include:

- A hero banner with an image that is uploaded to Strapi.
- A list of featured products. On Strapi products can be marked as ‘featured’. When a product is marked as ‘featured’ it should be displayed on the homepage.

#### Products page:

The products page must include:

- A list of all products added to Strapi. Each product must display its title, price and image. The product should link to its products detail page.
- A search text box. When searching (filtering), only the products that include the searched text in their title or description should be listed.

#### Product details page:

This page is reached by a user clicking on a product on the product list page. The product details page must include:

- title
- description
- image
- price
- an add to cart button. This will toggle the product in and out of a cart array stored in local storage.

#### Cart/Basket page:

The cart/basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.

Each product in the cart must display:

- title
- price
- a link to the product view page
- image

After the list of products, display the total price of all the products in the cart.

### Admin section

The admin section (apart from the log in form) must only be accessible to logged in admin users and must include the following features:

#### Login/logout:

Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.

When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.

#### Add/edit products:

For adding/editing product images use either of these 2 methods:

- Use a file upload field to upload images to Strapi, or
- Use a text input that allows a URL to be entered. This allows an image from an external URL to be used as the product image.

Create a form that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.

Allow products to be deleted. Before a product is deleted you must display a confirmation dialog. The product should only be deleted if the user confirms.

## Built With

- HTML
- Javascript
- Sass

## API Created With

- [Strapi](https://strapi.io)
- [Heroku](https://heroku.com)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:7oiden/mercury-shoes.git
```

## Contact

Get in touch at:

[LinkedIn](https://www.linkedin.com/in/tommy-j-16b56678/)

