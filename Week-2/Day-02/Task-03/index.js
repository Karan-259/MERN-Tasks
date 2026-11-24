const scores = [45, 80, 90, 35, 60, 75];
//filter >50
const total = scores.filter((score) => score >= 50)
console.log(total)

//map +10 bonus
const total1 =scores.map((score) => score + 10)
console.log(total1);

//reduce total
const total2 = scores.reduce((sum, score) => sum + score, 0);
console.log(total2);
