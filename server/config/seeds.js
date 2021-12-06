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
    // { name: 'Books and Other Products' }
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
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 5x7 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 8x12 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 8x12 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 12x18 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 12x18 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 16x24 Lustre Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Queechee, Vt. 16x24 Matte Print',
      description:
        'Vermont forest',
      image: 'store-0001.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 5x7 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 5x7 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 8x12 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 8x12 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 12x18 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 12x18 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 16x24 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'San Francisco Ferry 16x24 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0002.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Trampoline 5x7 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Trampoline 5x7 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Trampoline 8x12 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Trampoline 8x12 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Trampoline 12x18 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Trampoline 12x18 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Trampoline 16x24 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Trampoline 16x24 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0003.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 5x7 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 5x7 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 8x12 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 8x12 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 12x18 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 12x18 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 16x24 Lustre Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Ice Cream 16x24 Matte Print',
      description:
        'Parksville, N.Y.',
      image: 'store-0004.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 5x7 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 5x7 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 8x12 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 8x12 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 12x18 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 12x18 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 16x24 Lustre Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Mud Bog 16x24 Matte Print',
      description:
        'Hawk Point, Mo.',
      image: 'store-0005.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 5x7 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 5x7 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 8x12 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 8x12 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 12x18 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 12x18 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 16x24 Lustre Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Mardi Gras 16x24 Matte Print',
      description:
        'New Orleans, La.',
      image: 'store-0006.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 5x7 Lustre Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 5x7 Matte Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 8x12 Lustre Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 8x12 Matte Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 12x18 Lustre Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 12x18 Matte Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 16x24 Lustre Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Motorcycle Rally 16x24 Matte Print',
      description:
        'Sturgis, S.D.',
      image: 'store-0007.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Volleyball 5x7 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Volleyball 5x7 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Volleyball 8x12 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Volleyball 8x12 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Volleyball 12x18 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Volleyball 12x18 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Volleyball 16x24 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Volleyball 16x24 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0008.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 5x7 Lustre Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 5x7 Matte Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 8x12 Lustre Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 8x12 Matte Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 12x18 Lustre Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 12x18 Matte Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 16x24 Lustre Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'G-20 Protest 16x24 Matte Print',
      description: 'Pittsburgh, Penn.',
      image: 'store-0009.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Bull 1 5x7 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Bull 1 5x7 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Bull 1 8x12 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Bull 1 8x12 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Bull 1 12x18 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Bull 1 12x18 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Bull 1 16x24 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Bull 1 16x24 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0010.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Bull 2 5x7 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Bull 2 5x7 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Bull 2 8x12 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Bull 2 8x12 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Bull 2 12x18 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Bull 2 12x18 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Bull 2 16x24 Lustre Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Bull 2 16x24 Matte Print',
      description:
        'Rapid City, S.D.',
      image: 'store-0011.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'American Flags 5x7 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'American Flags 5x7 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'American Flags 8x12 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'American Flags 8x12 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'American Flags 12x18 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'American Flags 12x18 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'American Flags 16x24 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'American Flags 16x24 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0012.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
     {
      name: 'Golden Gate Bridge 5x7 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 5x7 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 8x12 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 8x12 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 12x18 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 12x18 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 16x24 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge 16x24 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0013.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
     {
      name: 'Bring Your Own Big Wheel 5x7 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 5x7 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 8x12 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 8x12 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 12x18 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 12x18 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 16x24 Lustre Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Bring Your Own Big Wheel 16x24 Matte Print',
      description:
        'San Francisco, Calif.',
      image: 'store-0014.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Mushroom 5x7 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Mushroom 5x7 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Mushroom 8x12 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Mushroom 8x12 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Mushroom 12x18 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Mushroom 12x18 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Mushroom 16x24 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Mushroom 16x24 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0015.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 5x7 Lustre Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 5x7 Matte Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 8x12 Lustre Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 8x12 Matte Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 12x18 Lustre Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 12x18 Matte Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 16x24 Lustre Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Shopping Cart and Field 16x24 Matte Print',
      description:
        'Fairfield, Calif',
      image: 'store-0016.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 5x7 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 5x7 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 8x12 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 8x12 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 12x18 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 12x18 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 16x24 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'San Francisco Bay Sunset 16x24 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0017.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 5x7 Lustre Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 5x7 Matte Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 8x12 Lustre Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 8x12 Matte Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 12x18 Lustre Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 12x18 Matte Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 16x24 Lustre Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Emeryville Marina 16x24 Matte Print',
      description:
        'Emeryville, Calif.',
      image: 'store-0018.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 5x7 Lustre Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 5x7 Matte Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 8x12 Lustre Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 8x12 Matte Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 12x18 Lustre Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 12x18 Matte Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 16x24 Lustre Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Covid Bear 16x24 Matte Print',
      description:
        'Oakland, Calif.',
      image: 'store-0019.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 5x7 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 5x7 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 8x12 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 8x12 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 12x18 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 12x18 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 16x24 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Ship at Sunset 16x24 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0020.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 5x7 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 5x7 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 8x12 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 8x12 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 12x18 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 12x18 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 16x24 Lustre Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Golden Gate Bridge at Sunset 16x24 Matte Print',
      description:
        'Berkeley, Calif.',
      image: 'store-0021.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
     {
      name: 'Filandia 5x7 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Filandia 5x7 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Filandia 8x12 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Filandia 8x12 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Filandia 12x18 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Filandia 12x18 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Filandia 16x24 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Filandia 16x24 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0022.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 5x7 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 5x7 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 8x12 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 8x12 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 12x18 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 12x18 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 16x24 Lustre Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Mirador de Filandia 16x24 Matte Print',
      description:
        'Filandia, Colombia',
      image: 'store-0023.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 5x7 Lustre Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 5x7 Matte Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 8x12 Lustre Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 8x12 Matte Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 12x18 Lustre Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 12x18 Matte Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 16x24 Lustre Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Catedral de Sal 16x24 Matte Print',
      description:
        'Zipaquira, Colombia',
      image: 'store-0024.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Icicles 5x7 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Icicles 5x7 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Icicles 8x12 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Icicles 8x12 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Icicles 12x18 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Icicles 12x18 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Icicles 16x24 Lustre Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Icicles 16x24 Matte Print',
      description:
        'New York, N.Y.',
      image: 'store-0025.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },
    {
      name: 'Holding Hands at Sunset 5x7 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[0]._id,
      price: 22.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 5x7 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[1]._id,
      price: 23.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 8x12 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[2]._id,
      price: 30.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 8x12 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[3]._id,
      price: 32.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 12x18 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[4]._id,
      price: 49.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 12x18 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[5]._id,
      price: 54.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 16x24 Lustre Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[6]._id,
      price: 80.88,
      quantity: 500
    },
    {
      name: 'Holding Hands 16x24 Matte Print',
      description:
        'Bulger, Penn.',
      image: 'store-0026.jpg',
      category: categories[7]._id,
      price: 94.88,
      quantity: 500
    },

    
   // still needed in store for seeding
 
    // {
    //   name: 'Elder, Younger, Not Presidential 12x8 Hardcover',
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