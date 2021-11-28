const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  ///

  const categories = await Category.insertMany([
    { name: '5x7 Lustre Prints' },
    { name: '5x7 Matte Prints' },
    { name: '8x12 Lustre Prints' },
    { name: '8x12 Matte Prints' },
    { name: '12x18 Lustre Prints' },
    { name: '12x18 Matte Prints' },
    { name: '16x24 Lustre Prints' },
    { name: '16x24 Matte Prints' },
    { name: 'Books' }
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
      price: 20.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 5x7 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[1]._id,
      price: 21.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 8x12 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[2]._id,
      price: 27.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 8x12 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[3]._id,
      price: 29.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 12x18 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[4]._id,
      price: 45.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 12x18 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[5]._id,
      price: 49.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 16x24 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[6]._id,
      price: 73.50,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 16x24 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[7]._id,
      price: 85.50,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry  5x7 Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[0]._id,
      price: 20.00,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry  8x12 Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[1]._id,
      price: 27.00,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry  12x18 Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[2]._id,
      price: 45.00,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry  16x24 Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[3]._id,
      price: 73.00,
      quantity: 500
    },
    {
      name: 'Trampoline',
      category: categories[8]._id,
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Ice Cream',
      category: categories[1]._id,
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Mud Bog',
      category: categories[1]._id,
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Mardi Gras',
      category: categories[2]._id,
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Motorcycle Rally',
      category: categories[2]._id,
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Volleyball',
      category: categories[3]._id,
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'G-20 Protest',
      category: categories[4]._id,
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Bull 1',
      category: categories[4]._id,
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      price: 1.01,
      quantity: 1000
    },
    {
      name: 'Bull 2',
      category: categories[4]._id,
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'American Flags',
      category: categories[4]._id,
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      price: 9.99,
      quantity: 600
    }
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