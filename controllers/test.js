[
    {
      _id: '66d19eb49054f5569f15dccd',
      productId: {
        _id: '66d18d6d9186d4ac87c9d70c',
        title: 'Headphone',
        price: 120.99,
        description: 'Good Headphone',
        imageUrl: 'images/2024-08-30T09:14:21.382Z-headphone.jpeg',
        userId: '66d17485dde329aa42443797',
        __v: 0
      },
      quantity: 1
    },
    {
      _id: '66d19eb89054f5569f15dcd6',
      productId: {
        _id: '66d18c089186d4ac87c9d705',
        title: 'First Product',
        price: 12.99,
        description: 'Good Product',
        imageUrl: 'images/2024-08-30T09:08:24.195Z-images.jpeg',
        userId: '66d17485dde329aa42443797',
        __v: 0
      },
      quantity: 2
    }
  ].map(p => {
    console.log(
     {
      name: p.productId.title,
      description: p.productId.description,
      amount: p.productId.price * 100,
      currency: 'usd',
      quantity: p.quantity
    }
)
})
