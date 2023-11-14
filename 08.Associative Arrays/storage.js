function storage(arr) {

    let map = new Map();

    for (let each of arr) {
        let [product, quantity] = each.split(" ");
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])

// storage([
//     'apple 50',
//     'apple 61',
//     'coffee 115',
//     'coffee 40'])

