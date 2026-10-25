const prices = [120, 250, 300, 450, 600];
const filter = prices.filter(prices => prices >= 250)
// 10% discount
const discountedPrices = filter.map(price => price * 0.9)
console.log(filter)
console.log(prices)
console.log(discountedPrices)