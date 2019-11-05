class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}파는 음식점 목록`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('피자마루');

const chicken = new Food('치킨');
chicken.addBrand("굽네");
chicken.addBrand('교촌');

pizza.print()
chicken.print()
