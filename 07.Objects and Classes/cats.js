function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow(result) {
            result = console.log(`${this.name}, age ${this.age} says Meow`);
            return result;
        }
    }

    let cats = [];

    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(" ");
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])