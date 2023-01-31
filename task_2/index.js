let products = [
    {
        id: 1234,
        name: 'Тапочки',
        description: 'Мягкие, удобные домашние тапочки',
        sizes: [39, 41, 43, 45],
        price: 3,
        available: true,
    },
    {
        id: 6437437,
        name: 'Футболка',
        description: 'Классическая белая футболка',
        sizes: ['M', 'L', 'XL'],
        price: 5,
        available: true,
    },
    {
        id: 2543733,
        name: 'Пижама',
        description: 'Комплект из футболки и лёгких брюк для сна',
        sizes: ['M', 'L', 'XL'],
        price: 13,
        available: true,
    },
    {
        id: 26437882,
        name: 'Шляпа',
        description: 'Мужская шляпа с высокими бортами',
        sizes: [54, 62, 68],
        price: 20,
        available: true,
    },
    {
        id: 13273548,
        name: 'Трусы',
        description: 'Романтические трусы с сердечками',
        sizes: ['M', 'L', 'XL'],
        price: 7,
        available: true,
    },
]

let cart = [
    {good: 1234, amount: 3},
    {good: 2543733, amount: 1},
]

function addToCart(productId, productAmount) {
    let matchCount = 0;
    for (let count = 0; count < cart.length; count++) {
        if (cart[count].good == productId) {
            cart[count] == {good: productId, amount: cart[count].amount + productAmount};
            matchCount++;
        }
    }
    if (matchCount == 0) {
        cart.push({good: productId, amount: productAmount});
    }
}

function deleteFromCart(cartProductId) {
    for (let count = 0; count < cart.length; count++) {
        if (cart[count].good == cartProductId) {
            cart.splice(count, 1);
        }
    }
}

function resetCart() {
    cart.length = 0;
}

function cartTotal() {
    let totalAmount = 0;
    let totalSumm = 0;
    let goodSumm = 0
    for (let count = 0; count < cart.length; count++) {
        for (let counter = 0; counter < products.length; counter++) {
            if (products[counter].id == cart[count].good) {
                goodSumm = products[counter].price * cart[count].amount;
            }
        }
        totalAmount = totalAmount + cart[count].amount;
        totalSumm = totalSumm + goodSumm;
    }
    const result = `totalAmount = ${totalAmount}\ntotalSumm = ${totalSumm}`

    return result
}

addToCart(2543733, 6)
addToCart(26437882, 2)
deleteFromCart(26437882)
addToCart(26437882, 2)
deleteFromCart(3)
addToCart(13273548, 10)
addToCart(6437437, 1)
resetCart()
addToCart(2543733, 6)
addToCart(26437882, 2)
console.log(cartTotal())
console.log(cart)