const car1 = {
    brand: "Honda",
    model: "Prelude",
    year: 2026
};
const car2 = {
    brand: "Hundai",
    model: "loniq 9",
    owner: 2026
};
const car3 = {...car1, ...car2};

console.log (car3);