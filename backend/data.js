import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ahmed',
      email: 'tossmax61@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Ige',
      email: 'example@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'iPhone 13 Pro Max',
      slug: 'Iphone-13-promax',
      category: 'Smartphones',
      image: '/images/one.jpg',
      price: 1085.61,
      countInStock: 10,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 10,
      description: 'Near new condition',
    },
    {
      //_id: '2',
      name: 'Samsung Galaxy A13',
      slug: 'samsung-galaxy-a13',
      category: 'Smartphones',
      image: '/images/two.jpg',
      price: 67.45,
      countInStock: 0,
      brand: 'Samsung',
      rating: 4.5,
      numReviews: 10,
      description: 'Condition: New',
    },
    {
      //_id: '3',
      name: 'LG Wing 5G 128GB',
      slug: 'lg-wing-5g',
      category: 'Smartphones',
      image: '/images/three.jpg',
      price: 395,
      countInStock: 16,
      brand: 'Lg',
      rating: 4.5,
      numReviews: 10,
      description: 'Condition: New',
    },
    {
      //_id: '4',
      name: 'Huawei Mate 20',
      slug: 'huawei-mate-20',
      category: 'Smartphones',
      image: '/images/four.jpg',
      price: 395,
      countInStock: 16,
      brand: 'Huawei',
      rating: 4.5,
      numReviews: 10,
      description: 'Used Condition',
    },
  ],
};

export default data;
