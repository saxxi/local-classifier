export const imageLister = (req, res, next) => {
  const images = [
    {
      path: '/bn.jpg',
      categories: 'abc,def',
    },
    {
      path: '/bn.jpg',
      categories: 'abc,def',
    },
    {
      path: '/bn.jpg',
      categories: 'abc,def',
    },
    {
      path: '/bn.jpg',
      categories: 'abc,def',
    },
    {
      path: '/bn.jpg',
      categories: 'abc,def',
    },
  ];

  res.send({
    images,
  });
}
