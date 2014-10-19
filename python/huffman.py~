"""Huffman Data Compression."""

#Determining Relative Frequencies.
codes={}
s="aaabbjkkksissjsisijsknjjscjnjksjjksemkc"
print "\nOriginal string is: ",s
def frequency(s):
	freq={}
	for let in s:
		freq[let]= freq.get(let,0)+1
	return freq
print "\nFrequency of each letters in the string",frequency(s)

def sortFreq(freq):
	c=[]
	for letter in freq.keys():
		c.append((freq[letter],letter))
	return sorted(c)

print "\nSorted frequency for the string",sortFreq(frequency(s))

def buildTree(tuples):  #Assigning codes to the Characters
	while len(tuples)>1:
		least=tuple(tuples[0:2])
		rest=tuples[2:]
		combFreq=least[0][0]+least[1][0]
		tuples=rest+[(combFreq,least)]
		tuples.sort()
	return tuples[0]
print "\nComplete tree",buildTree(sortFreq(frequency(s)))

def trimTree(tree):
	p=tree[1]
	if type(p)==type(""):
		return p
	else:
		return (trimTree(p[0]),trimTree(p[1]))

print "\nNice nested representation of the tree",trimTree(buildTree(sortFreq(frequency(s))))

def assignCode(node,pat=''):
	global codes
	if type(node)==type(''):
		codes[node]=pat
	else:
		assignCode(node[0],pat+"0")
		assignCode(node[1],pat+"1")
	return codes
print "\nCode assigned to each character",assignCode(trimTree(buildTree(sortFreq(frequency(s)))))

def encode(s):
	global codes
	output=""
	for ch in s:
		output += codes[ch]
	return output
print "\nEncoded value is: ",encode(s)

def decode(tree,s):
	output=""
	p=tree
	for bit in s:
		if bit =='0':
			p=p[0]
		else:
			p=p[1]
		if type(p)==type(""):
			output += p
			p=tree
	return output
original=decode(trimTree(buildTree(sortFreq(frequency(s)))),encode(s))
print "\n\t\tDecoded matches Original:",s == original
