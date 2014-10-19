function sortFreq(freqs){
	var list=[];
	for(var letter in freqs){
		list.push([freqs[letter],letter])
	}
	list.sort();
	return list
};
console.log(sortFreq({'a': 3, 'c': 2, 'b': 1, 'e': 5, 'd': 1, 'g': 1, 'f': 2}))
