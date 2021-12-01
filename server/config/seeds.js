////

const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: '5x7 Lustre Prints' },
    { name: '5x7 Matte Prints' },
    { name: '8x12 Lustre Prints' },
    { name: '8x12 Matte Prints' },
    { name: '12x18 Lustre Prints' },
    { name: '12x18 Matte Prints' },
    { name: '16x24 Lustre Prints' },
    { name: '16x24 Matte Prints' },
    // { name: 'Books' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Queechee, Vt. 5x7 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[0]._id,
      price: 20.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 5x7 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[1]._id,
      price: 21.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 8x12 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[2]._id,
      price: 27.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 8x12 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[3]._id,
      price: 29.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 12x18 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[4]._id,
      price: 45.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 12x18 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[5]._id,
      price: 49.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 16x24 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[6]._id,
      price: 73.55,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 16x24 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[7]._id,
      price: 85.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 5x7 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[0]._id,
      price: 20.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 5x7 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[1]._id,
      price: 21.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 8x12 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[2]._id,
      price: 27.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 8x12 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[3]._id,
      price: 29.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 12x18 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[4]._id,
      price: 45.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 12x18 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[5]._id,
      price: 49.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 16x24 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[6]._id,
      price: 73.55,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 16x24 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[7]._id,
      price: 85.55,
      quantity: 500
    },
    {
      name: 'Trampoline 5x7 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[0]._id,
      price: 20.55,
      quantity: 500
    },
    {
      name: 'Trampoline 5x7 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[1]._id,
      price: 21.55,
      quantity: 500
    },
    {
      name: 'Trampoline 8x12 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[2]._id,
      price: 27.55,
      quantity: 500
    },
    {
      name: 'Trampoline 8x12 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[3]._id,
      price: 29.55,
      quantity: 500
    },
    {
      name: 'Trampoline 12x18 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[4]._id,
      price: 45.55,
      quantity: 500
    },
    {
      name: 'Trampoline 12x18 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[5]._id,
      price: 49.55,
      quantity: 500
    },
    {
      name: 'Trampoline 16x24 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[6]._id,
      price: 73.55,
      quantity: 500
    },
    {
      name: 'Trampoline 16x24 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[7]._id,
      price: 85.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 5x7 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[0]._id,
      price: 20.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 5x7 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[1]._id,
      price: 21.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 8x12 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[2]._id,
      price: 27.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 8x12 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[3]._id,
      price: 29.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 12x18 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[4]._id,
      price: 45.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 12x18 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[5]._id,
      price: 49.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 16x24 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[6]._id,
      price: 73.55,
      quantity: 500
    },
    {
      name: 'Ice Cream 16x24 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[7]._id,
      price: 85.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 5x7 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[0]._id,
      price: 20.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 5x7 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[1]._id,
      price: 21.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 8x12 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[2]._id,
      price: 27.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 8x12 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[3]._id,
      price: 29.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 12x18 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[4]._id,
      price: 45.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 12x18 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[5]._id,
      price: 49.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 16x24 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[6]._id,
      price: 73.55,
      quantity: 500
    },
    {
      name: 'Mud Bog 16x24 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[7]._id,
      price: 85.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 5x7 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[0]._id,
      price: 20.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 5x7 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[1]._id,
      price: 21.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 8x12 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[2]._id,
      price: 27.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 8x12 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[3]._id,
      price: 29.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 12x18 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[4]._id,
      price: 45.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 12x18 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[5]._id,
      price: 49.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 16x24 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[6]._id,
      price: 73.55,
      quantity: 500
    },
    {
      name: 'Mardi Gras 16x24 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[7]._id,
      price: 85.55,
      quantity: 500
    },
    {
      name: 'Bull 1 Test Print',
      category: categories[0]._id,
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      price: 1.01,
      quantity: 1000
    },
  





    
    
   // still needed in store for seeding

    // {
    //   name: 'Motorcycle Rally',
    //   category: categories[2]._id,
    //   description:
    //     'Sturgis, S.D.',
    //   image: 'store-0007.jpg',
    //   price: 199.99,
    //   quantity: 30
    // },
    // {
    //   name: 'Volleyball',
    //   category: categories[3]._id,
    //   description:
    //     'Rapid City, S.D.',
    //   image: 'store-0008.jpg',
    //   price: 9.99,
    //   quantity: 100
    // },
    // {
    //   name: 'G-20 Protest',
    //   category: categories[4]._id,
    //   description: 'Pittsburgh, Penn.',
    //   image: 'store-0009.jpg',
    //   price: 1.99,
    //   quantity: 1000
    // },
    // {
    //   name: 'Bull 1',
    //   category: categories[0]._id,
    //   description:
    //     'Rapid City, S.D.',
    //   image: 'store-0010.jpg',
    //   price: 1.01,
    //   quantity: 1000
    // },
    // {
    //   name: 'Bull 2',
    //   category: categories[4]._id,
    //   description:
    //     'Rapid City, S.D.',
    //   image: 'store-0011.jpg',
    //   price: 7.99,
    //   quantity: 100
    // },
    // {
    //   name: 'American Flags',
    //   category: categories[4]._id,
    //   description:
    //     'New York, N.Y.',
    //   image: 'store-0012.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Elder, Younger, Not Presidential Vol. 1 12x8 Hardcover',
    //   category: categories[8]._id,
    //   description:
    //     '12x8 Photo Book, Published in 2021',
    //   image: 'store-0009.jpg',
    //   price: 1.01,
    //   quantity: 1000
    // }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});