function frequency(str){
	var freqs = {};
	for(var ch=0; ch<str.length; ch++){
		if(str[ch] in freqs){
			freqs[str[ch]]++;
        }
      	else
          		freqs[str[ch]]=1;
    }
    return freqs
};
console.log(frequency('aaabccdeeeeeffg'))
