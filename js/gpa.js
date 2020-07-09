//Javascript
var engineering = {
	ce: {
		scores: [3.52, 1.92],
		number: 40
	},
	ee: {
		scores: [3.71,1.92],
		number: 47
	},
	coe: {
		scores: [2.27,1.53],
		number: 5
	},
	me: {
		scores: [2.37,1.42],
		number: 44
	},
	che: {
		scores: [2.77,1.50],
		number: 30
	},
	mne: {
		scores: [2.40,1.38,1.42,1.63],
		number: 6
	},
	mae: {
		scores: [1.76,1.30,1.50,1.47],
		number: 4
	},
	mte: {
		scores: [3.45,1.23,1.95,1.32,2.05,1.65],
		number: 21
	},
	ene: {
		scores: [1.97,1.23,1.40,1.18,1.71,1.29],
		number: 27
	},
	bme: {
		scores: [3.48,1,23,1.39,1.34,2.69],
		number: 17
	},
	ie: {
		scores: [2.19,1.18,2.02,1.23],
		number: 30
	},
	mfe: {
		scores: [1.40,1.18,1.15,2.18,1.10],
		number: 15
	}
}

function getMinScore(tag)
{
	let minimum = engineering[tag].scores[0];
	for(let i of engineering[tag].scores)
	{
		if(i < minimum)
		{
			minimum = i;
		}
	}
	return minimum;
}

function getMaxScore(tag)
{
	let maximum = engineering[tag].scores[0];
	for(let i of engineering[tag].scores)
	{
		if(i > maximum)
		{
			maximum = i;
		}
	}
	return maximum;
}

function getAverage(tag)
{
	let sum = 0, cases = engineering[tag].scores.length;
	for(let i of engineering[tag].scores)
	{
		sum += i;
	}
	return sum / cases;
}

function selectSubject(element)
{
	var parent = element.parentNode.parentNode;

	var underline = document.createElement('div');
	underline.
	parent.appendChild(underline);
	
}