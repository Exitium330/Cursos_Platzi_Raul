function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWhitDiscount = price - discount
    
    return priceWhitDiscount;
}

const originalPrice = 150000;
const discountPercentage = 35;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log('original Price: $' + originalPrice);
console.log('discount: ' + discountPercentage + '%');
console.log('final Price: $' + finalPrice); 