// // require('dotenv').config();

// const { AuthenticationError } = require('apollo-server-express');
// const { User, Product, Category, Order } = require('../models');
// const { signToken } = require('../utils/auth');
// // const stripe = require('stripe')(process.env.STRIPE_CLIENT_ID);
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// //for Strip fulfillment

// // This is your Stripe CLI webhook secret for testing your endpoint locally.  use: getenv('STRIPE_WEBHOOK_SECRET')
// const endpointSecret = 'sk_test_51JwzcFLzDJN6vPr4qdUekNdohxYRQcR5B3qhozbM4NHQsZ0sbauSK7DjJMKgoL8zUziUC1JUMbxx5TV3jSP84t1600eKzwO26R';
// // const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// // Using Express
// const app = require('express')();

// // Use body-parser to retrieve the raw body as a buffer
// const bodyParser = require('body-parser');

// const fulfillOrder = (session) => {
//   // TODO: fill me in
//   console.log("Fulfilling order", session);
// }

// const createOrder = (session) => {
//   // TODO: fill me in
//   console.log("Creating order", session);
// }

// const emailCustomerAboutFailedPayment = (session) => {
//   // TODO: fill me in
//   console.log("Emailing customer", session);
// }

// app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
//   const payload = request.body;
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
//   } catch (err) {
//     return response.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   switch (event.type) {
//     case 'checkout.session.completed': {
//       const session = event.data.object;
//       // Save an order in your database, marked as 'awaiting payment'
//       createOrder(session);

//       // Check if the order is paid (e.g., from a card payment)
//       //
//       // A delayed notification payment will have an `unpaid` status, as
//       // you're still waiting for funds to be transferred from the customer's
//       // account.
//       if (session.payment_status === 'paid') {
//         fulfillOrder(session);
//       }

//       break;
//     }

//     case 'checkout.session.async_payment_succeeded': {
//       const session = event.data.object;

//       // Fulfill the purchase...
//       fulfillOrder(session);

//       break;
//     }

//     case 'checkout.session.async_payment_failed': {
//       const session = event.data.object;

//       // Send an email to the customer asking them to retry their order
//       emailCustomerAboutFailedPayment(session);

//       break;
//     }
//   }

//   response.status(200);
// });

// app.listen(4242, () => console.log('Running on port 4242'));

// // end of Stripe fulfillment

// const resolvers = {
  
//   Query: {
//     categories: async () => {
//       return await Category.find();
//     },
//     products: async (parent, { category, name }) => {
//       const params = {};

//       if (category) {
//         params.category = category;
//       }

//       if (name) {
//         params.name = {
//           $regex: name
//         };
//       }

//       return await Product.find(params).populate('category');
//     },
//     product: async (parent, { _id }) => {
//       return await Product.findById(_id).populate('category');
//     },
//     user: async (parent, args, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.products',
//           populate: 'category'
//         });

//         user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

//         return user;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     order: async (parent, { _id }, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.products',
//           populate: 'category'
//         });

//         return user.orders.id(_id);
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     checkout: async (parent, args, context) => {
//       const url = new URL(context.headers.referer).origin;
//       const order = new Order({ products: args.products });
//       const { products } = await order.populate('products').execPopulate();
      
//       const line_items = [];

//   for (let i = 0; i < products.length; i++) {
//   // generate product id
//   const product = await stripe.products.create({
//     name: products[i].name,
//     description: products[i].description,
//     images: [`${url}/images/${products[i].image}`]
//   });

//   // generate price id using the product id
//   const price = await stripe.prices.create({
//     product: product.id,
//     unit_amount: products[i].price * 100,
//     currency: 'usd',
//   });

//   // add price id to the line items array
//   line_items.push({
//     price: price.id,
//     quantity: 1
//   });
// }

// // begin stripe session 

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     shipping_address_collection: {
//       allowed_countries: ['US', 'CA'],
//     },
//     shipping_options: [
//       {
//         shipping_rate_data: {
//           type: 'fixed_amount',
//           fixed_amount: {
//             amount: 1100,
//             currency: 'usd',
//           },
//           display_name: 'Lowest Cost Shipping',
//           // Delivers between 7-14 business days
//           delivery_estimate: {
//             minimum: {
//               unit: 'business_day',
//               value: 7,
//             },
//             maximum: {
//               unit: 'business_day',
//               value: 14,
//             },
//           }
//         }
//       },
//       {
//         shipping_rate_data: {
//           type: 'fixed_amount',
//           fixed_amount: {
//             amount: 2600,
//             currency: 'usd',
//           },
//           display_name: 'One-Day Shipping',
//           // Delivers in exactly 1 business day
//           delivery_estimate: {
//             minimum: {
//               unit: 'business_day',
//               value: 1,
//             },
//             maximum: {
//               unit: 'business_day',
//               value: 1,
//             },
//           }
//         }
//       },
//     ],
//     line_items,
//     mode: 'payment',
//     success_url: `${url}/success?session_id=cs_test_b1pFNGXhSo3Tv7v6pJcpmEDvpNbwXfDIw6NuP4F7X9Ko7LbVWvrfGfBrFO`,
//     cancel_url: `${url}/`
//   });


//   return { session: session.id };

//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     addOrder: async (parent, { products }, context) => {
//       console.log(context);
//       if (context.user) {
//         const order = new Order({ products });

//         await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

//         return order;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     updateUser: async (parent, args, context) => {
//       if (context.user) {
//         return await User.findByIdAndUpdate(context.user._id, args, { new: true });
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     updateProduct: async (parent, { _id, quantity }) => {
//       const decrement = Math.abs(quantity) * -1;

//       return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     }
//   }
// };

// module.exports = resolvers;

const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const { products } = await order.populate('products').execPopulate();
      
      const line_items = [];

  for (let i = 0; i < products.length; i++) {
  // generate product id
  const product = await stripe.products.create({
    name: products[i].name,
    description: products[i].description,
    images: [`${url}/images/${products[i].image}`]
  });

  // generate price id using the product id
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: products[i].price * 100,
    currency: 'usd',
  });

  // add price id to the line items array
  line_items.push({
    price: price.id,
    quantity: 1
  });
}
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${url}/success?session_id=cs_test_b1pFNGXhSo3Tv7v6pJcpmEDvpNbwXfDIw6NuP4F7X9Ko7LbVWvrfGfBrFO`,
    cancel_url: `${url}/`
  });


  return { session: session.id };

    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
