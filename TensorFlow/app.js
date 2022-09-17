const values = [];
for (let i = 0; i < 30; i++) {
	values[i] = parseInt(Math.random() * 100 + 1);
}
const shape = [2, 5, 3];
const tense = tf.tensor3d(values, shape, "int32");

// tense.data().then((stuff) => {
// 	console.log(stuff);
// });

console.log(tense.dataSync());
console.log(tense);
