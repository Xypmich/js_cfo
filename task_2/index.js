let products = {
    1: {
        id: 1234,
        name: 'Тапочки',
        description: 'Мягкие, удобные домашние тапочки',
        sizes: [39, 41, 43, 45],
        price: 3,
        available: true,
    },
    2: {
        id: 6437437,
        name: 'Футболка',
        description: 'Классическая белая футболка',
        sizes: ['M', 'L', 'XL'],
        price: 5,
        available: true,
    },
    3: {
        id: 2543733,
        name: 'Пижама',
        description: 'Комплект из футболки и лёгких брюк для сна',
        sizes: ['M', 'L', 'XL'],
        price: 13,
        available: true,
    },
    4: {
        id: 26437882,
        name: 'Шляпа',
        description: 'Мужская шляпа с высокими бортами',
        sizes: [54, 62, 68],
        price: 20,
        available: true,
    },
    5: {
        id: 13273548,
        name: 'Трусы',
        description: 'Романтические трусы с сердечками',
        sizes: ['M', 'L', 'XL'],
        price: 7,
        available: true,
    },
}

let cart = [
    [1, 3],
    [3, 1],
]

function addToCart(productId, amount) {
    let matchCount = 0;
    for (let count = 0; count < cart.length; count++) {
        if (cart[count][0] == productId) {
            cart[count] == [productId, cart[count][1] + amount];
            matchCount++;
        }
    }
    if (matchCount == 0) {
        cart.push([productId, amount]);
    }
}

function deleteFromCart(cartProductId) {
    for (let count = 0; count < cart.length; count++) {
        if (cart[count][0] == cartProductId) {
            cart.splice(count, 1);
        }
    }
}

// function decreaseCartPositionAmount(positionIndex) {
//     cart[positionIndex] = [cart[positionIndex][0], cart[positionIndex][1] - 1];
// }

// function increaseCartPositionAmount(positionIndex) {
//     cart[positionIndex] = [cart[positionIndex][0], cart[positionIndex][1] + 1];
// }

function resetCart() {
    cart.length = 0;
}

function cartTotal() {
    let totalAmount = 0;
    let totalSumm = 0;
    for (let count = 0; count < cart.length; count++) {
        totalAmount = totalAmount + cart[count][1];
        totalSumm = totalSumm + products[cart[count][0]].price;
    }
    const result = `totalAmount = ${totalAmount}\ntotalSumm = ${totalSumm}`

    return result
}

addToCart(3, 6)
addToCart(4, 2)
deleteFromCart(4)
addToCart(4, 2)
deleteFromCart(3)
addToCart(5, 10)
addToCart(2, 1)
resetCart()
addToCart(3, 6)
addToCart(4, 2)
// increaseCartPositionAmount(1)
// increaseCartPositionAmount(1)
// decreaseCartPositionAmount(0)
console.log(cartTotal())