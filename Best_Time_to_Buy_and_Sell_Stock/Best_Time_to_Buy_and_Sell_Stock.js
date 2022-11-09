// var maxProfit = function (prices) {
//     let out = 0;
//     for (let i=0; i < prices.length; i++) {
//         for (j=i+1; j< prices.length; j++) {
//             if (prices[j]-prices[i] > out ) {
//                 out = prices[j] - prices[i];
//             }
//         }
//     }
//     return out
// };

var maxProfit = function (prices) {
    let minPrice = 10000;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if ((price - minPrice) > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit
};