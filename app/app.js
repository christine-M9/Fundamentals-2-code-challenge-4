
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * 0.15;
    } else{
        return bills * 0.2;
    } 
    
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip); 
}

console.log("Tips: ", tips);
console.log("Totals: ", totals);
