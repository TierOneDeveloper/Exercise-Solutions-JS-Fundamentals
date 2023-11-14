function storeProvision(stockProducts, orderedProducts) {

    let products = {};

    for (let i = 0; i < stockProducts.length; i += 2) {
        let productName = stockProducts[i];
        let quantity = Number(stockProducts[i + 1]);
        products[productName] = quantity;

    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let productName = orderedProducts[j];
        let quantity = Number(orderedProducts[j + 1]);

        if (productName in products) {
            products[productName] += quantity;
        } else {
            products[productName] = quantity;
        }
    }

    let entries = Object.entries(products);
    for (let entry of entries) {
        console.log(entry.join(" -> "));
    }
}

storeProvision
    (['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
        ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

// storeProvision
//     (['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//         ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])