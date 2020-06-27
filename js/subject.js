// JavaScript Document
var firstTerm = false;
var secondTerm = false;

var isLowerSection = false;

var subject = [
	{id:["200-101"], name: ["INTRO TO ENGINEERING"], time: 1, grade: "D"},
	{id:["240-101","242-101"], name: ["INTRO TO COMPUTER PROGRAM"], time: 3, grade: "D"},
	{id:["322-171"], name: ["PHYSICAL SCIENCE MATH I"], time: 3, grade: "D"},
	{id:["332-103"], name: ["PHYSICS FOR ENGINEERING I"], time: 3, grade: "D"},
	{id:["332-113"], name: ["PHYSICS LAB FOR ENGINEERING I"], time: 1, grade: "D"},
	{id:["890-002"], name: ["EVERYDAY ENGLISH"], time: 2, grade: "D"},
	{id:["215-111","216-111"], name: ["ENGINEERING DRAWING"], time: 3, grade: "D"},
	{id:["221-101","220-102"], name: ["ENGINEERING MECHANICS I"], time: 3, grade: "D"},
	{id:["322-172"], name: ["PHYSICAL SCIENCE MATH II"], time: 3, grade: "D"},
	{id:["324-103"], name: ["GENERAL CHEMISTRY"], time: 3, grade: "D"},
	{id:["325-103"], name: ["GENERAL CHEMISTRY LAB"], time: 1, grade: "D"},
	{id:["332-104"], name: ["PHYSICS FOR ENGINEERING II"], time: 3, grade: "D"},
	{id:["332-114"], name: ["PHYSICS LAB FOR ENGINEERING II"], time: 1, grade: "D"},
	{id:["890-003"], name: ["ENGLISH ON THE GO"], time: 2, grade: "D"},
	{id:["890-004"], name: ["ENGLISH IN THE DIGITAL WORLD"], time: 2, grade: "D"},
	{id:["890-005"], name: ["ENGLISH FOR ACADEMIC SUCCESS"], time: 2, grade: "D"},
]

function onClick(num)
{
	if(num == "1")
		firstTerm = !firstTerm;
	else if(num == "2")
		secondTerm = !secondTerm;
	
	onUpdate();
}

function load()
{
	onClick("1");
	onClick("2");
}

function onUpdate()
{
	
	if(firstTerm){
		document.getElementById("status_1").innerHTML = "expand_less";
	}else{
		document.getElementById("status_1").innerHTML = "expand_more";
	}
	
	if(secondTerm){
		document.getElementById("status_2").innerHTML = "expand_less";
	}else{
		document.getElementById("status_2").innerHTML = "expand_more";
	}
	
	onTermUpdate()
}

function onTermUpdate()
{
	var termOne = document.getElementById("termOne");
	var termTwo = document.getElementById("termTwo");
	
	var introEng, introCom, drawing, mecha,chemist,chemLab;
	
	while(termOne.childNodes.length > 0){
		termOne.removeChild(termOne.childNodes[0]);
	}
	
	while(termTwo.childNodes.length > 0){
		termTwo.removeChild(termTwo.childNodes[0]);
	}
	
	if(!isLowerSection)
	{
		introEng = createDiv(0,0);	
		introCom = createDiv(1,0);
		
		if(firstTerm)
		{
			termOne.appendChild(introEng);
			termOne.appendChild(introCom);
		}
		
		drawing = createDiv(6,1);
		mecha = createDiv(7,1);
		chemist = createDiv(9,0);
		chemLab = createDiv(10,0);
		
		if(secondTerm){
			termTwo.appendChild(drawing);
			termTwo.appendChild(mecha);
			termTwo.appendChild(chemist);
			termTwo.appendChild(chemLab);
		}
		
	}else{
		introEng = createDiv(0,0);	
		introCom = createDiv(1,1);
		
		if(secondTerm){
			termTwo.appendChild(introEng);
			termTwo.appendChild(introCom);
		}
		
		drawing = createDiv(6,0);
		mecha = createDiv(7,0);
		chemist = createDiv(9,0);
		chemLab = createDiv(10,0);
		
		if(firstTerm){
			termOne.appendChild(drawing);
			termOne.appendChild(mecha);
			termOne.appendChild(chemist);
			termOne.appendChild(chemLab);
		}
		
	}
	
	var mathI = createDiv(2,0);	
	var phyI = createDiv(3,0);	
	var labPhyI = createDiv(4,0);
	
	if(firstTerm){
		termOne.appendChild(mathI);
		termOne.appendChild(phyI);
		termOne.appendChild(labPhyI);
	}
	
	var mathII = createDiv(8,0);	
	var phyII = createDiv(11,0);	
	var labPhyII = createDiv(12,0);
	
	if(secondTerm){
		termTwo.appendChild(mathII);
		termTwo.appendChild(phyII);
		termTwo.appendChild(labPhyII);
	}
}

function createDiv(index, section)
{
	var d = document.createElement('div');
	d.style.display = "flex";
	d.style.width = "100%";
	
	var idDiv = document.createElement('div');
	idDiv.style.width = "14%";
	idDiv.style.marginLeft = "4%";
	idDiv.className = "table_cell member_cell round_border";
	idDiv.innerHTML = subject[index].id[section];
	
	var nameDiv = document.createElement('div');
	nameDiv.style.width = "55%";
	nameDiv.className = "table_cell member_cell round_border";
	nameDiv.innerHTML = subject[index].name[0];
	
	var timeDiv = document.createElement('div');
	timeDiv.style.width = "10%";
	timeDiv.className = "table_cell member_cell round_border";
	timeDiv.innerHTML = subject[index].time;
	
	var gradeDiv = document.createElement('div');
	gradeDiv.style.width = "17%";
	gradeDiv.className = "table_cell member_cell round_border";
	gradeDiv.innerHTML = subject[index].grade;
	
	d.appendChild(idDiv);
	d.appendChild(nameDiv);
	d.appendChild(timeDiv);
	d.appendChild(gradeDiv);
	
	return d;
}