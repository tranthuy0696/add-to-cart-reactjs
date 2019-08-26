let initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: 'Sản phẩm do apple sản xuất',
        price: 580,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Iphone 6 Plus',
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: 'Sản phẩm do apple sản xuất',
        price: 480,
        inventory: 10,
        rating: 4
    },
    {
        id: 3,
        name: 'Samsung Galaxy',
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 5,
        rating: 3
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default products
