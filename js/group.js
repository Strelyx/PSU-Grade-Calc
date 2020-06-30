var subject = [
    {
        name: "intro-eng",
        time: 1,
        grade: ""
    },
    {
        name: "intro-com",
        time: 3,
        grade: ""
    },
    {
        name: "math-1",
        time: 3,
        grade: ""
    },
    {
        name: "phy-1",
        time: 3,
        grade: ""
    },
    {
        name: "lab-phy-1",
        time: 1,
        grade: ""
    },
    {
        name: "eng-1",
        time: 2,
        grade: ""
    },
    {
        name: "drawing",
        time: 3,
        grade: ""
    },
    {
        name: "mecha",
        time: 3,
        grade: ""
    },
    {
        name: "chem",
        time: 3,
        grade: ""
    },
    {
        name: "lab-chem",
        time: 1,
        grade: ""
    },
    {
        name: "math-2",
        time: 3,
        grade: ""
    },
    {
        name: "phy-2",
        time: 3,
        grade: ""
    },
    {
        name: "lab-phy-2",
        time: 1,
        grade: ""
    },
    {
        name: "eng-2",
        time: 2,
        grade: ""
    }
]

function onGroupSelect(group)
{
    document.getElementById('group_status').innerHTML = group
    if(group >= 'A' && group <= 'I')
    {
        document.getElementById('section_status').innerHTML = "บน"
        setUpTable(true);
    }else if(group >= 'J' && group <= 'Q'){
        document.getElementById('section_status').innerHTML = "ล่าง"
        setUpTable(false);
    }
}

function onHover(element)
{
    var select = document.createElement('select');
    select.setAttribute("class", "selected-grade kanit");
    select.setAttribute("onchange", "onNotHover(this.parentNode)");
    select.setAttribute("style", "width: 100%;")

    var option = document.createElement('option');
    option.text = ""; option.value = "";
    option.selected = true; option.disabled = true;
    select.add(option);

    addOption(select, "A", "A");
    addOption(select, "B+", "B+");
    addOption(select, "B", "B");
    addOption(select, "C+", "C+");
    addOption(select, "C", "C");
    addOption(select, "D+", "D+");
    addOption(select, "D", "D");
    addOption(select, "E", "E");
    addOption(select, "Withdrawn", "Withdrawn");
    addOption(select, "ไม่ลงทะเบียน", "ไม่ลงทะเบียน");

    if(element.childNodes[0].innerHTML != "")
    {
        for(let i=0;i<select.options.length;i++)
        {
            if(select.options[i].text == element.childNodes[0].innerHTML)
            {
                select.options[i].selected = true;
                break;
            }
        }
    }

    while(element.childNodes.length > 0)
    {
        element.removeChild(element.childNodes[0]);
    }
    element.appendChild(select);
}

function onNotHover(element)
{
    var div = document.createElement('div');
    div.setAttribute("class", "kanit");
    div.setAttribute("style", "width: 100%; height: 30px; font-size: 16px; margin-top: 5px")
    div.setAttribute("onclick", "onHover(this.parentNode)");

    var select = element.childNodes[0];
    div.innerHTML = select.options[select.selectedIndex].text;

    saveVariable(getSubjectVariable(element.previousSibling.previousSibling.previousSibling.innerHTML), select.options[select.selectedIndex].text);

    while(element.childNodes.length > 0)
    {
        element.removeChild(element.childNodes[0]);
    }
    element.appendChild(div);
    calculateGpa();
}

function setUpTable(isUpper)
{
    var termTwo = document.getElementById('termTwo');
    if(isUpper)
    {
        let introEng = generateTimeTable("200-101", "INTRO TO ENGINEERING", 1, "intro-eng");
        let introCom = generateTimeTable("240-101", "INTRO TO COMPUTER PROGRAM", 3, "intro-com");
        let mathI = generateTimeTable("322-171", "PHYSICAL SCIENCE MATH I", 3, "math-1");
        let phyI = generateTimeTable("332-103", "PHYSICS FOR ENGINEERING I", 3, "phy-1");
        let labPhyI = generateTimeTable("332-113", "PHYSICS LAB FOR ENGINEERING I", 1, "lab-phy-1");
        let engI = generateTimeTable("890-00X", "รายวิชาภาษาอังกฤษ เทอม 1", 2, "eng-1");

        while(termTwo.parentNode.childNodes[4] != termTwo)
        {
            termTwo.parentNode.removeChild(termTwo.parentNode.childNodes[4]);
        }

        termTwo.parentNode.insertBefore(introEng, termTwo);
        termTwo.parentNode.insertBefore(introCom, termTwo);
        termTwo.parentNode.insertBefore(mathI, termTwo);
        termTwo.parentNode.insertBefore(phyI, termTwo);
        termTwo.parentNode.insertBefore(labPhyI, termTwo);
        termTwo.parentNode.insertBefore(engI, termTwo);

        while(termTwo.parentNode.lastChild != termTwo)
        {
            termTwo.parentNode.removeChild(termTwo.parentNode.childNodes[11]);
        }

        let drawing = generateTimeTable("216-111", "ENGINEERING DRAWING", 3, "drawing");
        let mecha = generateTimeTable("220-102", "ENGINEERING MECHANICS I", 3, "mecha");
        let chem = generateTimeTable("324-103", "GENERAL CHEMISTRY", 3, "chem");
        let labChem = generateTimeTable("325-103", "GENERAL CHEMISTRY LAB", 1, "lab-chem");
        let mathII = generateTimeTable("322-172", "PHYSICAL SCIENCE MATH II", 3, "math-2");
        let phyII = generateTimeTable("332-104", "PHYSICS FOR ENGINEERING II", 3, "phy-2");
        let labPhyII = generateTimeTable("332-114", "PHYSICS LAB FOR ENGINEERING II", 1, "lab-phy-2");
        let engII = generateTimeTable("890-00Y", "รายวิชาภาษาอังกฤษ เทอม 2", 2, "eng-2");

        termTwo.parentNode.appendChild(drawing);
        termTwo.parentNode.appendChild(mecha);
        termTwo.parentNode.appendChild(chem);
        termTwo.parentNode.appendChild(labChem);
        termTwo.parentNode.appendChild(mathII);
        termTwo.parentNode.appendChild(phyII);
        termTwo.parentNode.appendChild(labPhyII);
        termTwo.parentNode.appendChild(engII);
    }else{

        let drawing = generateTimeTable("215-111", "ENGINEERING DRAWING", 3, "drawing");
        let mecha = generateTimeTable("221-101", "ENGINEERING MECHANICS I", 3, "mecha");
        let chem = generateTimeTable("324-103", "GENERAL CHEMISTRY", 3, "chem");
        let labChem = generateTimeTable("325-103", "GENERAL CHEMISTRY LAB", 1, "lab-chem");
        let mathI = generateTimeTable("322-171", "PHYSICAL SCIENCE MATH I", 3, "math-1");
        let phyI = generateTimeTable("332-103", "PHYSICS FOR ENGINEERING I", 3, "phy-1");
        let labPhyI = generateTimeTable("332-113", "PHYSICS LAB FOR ENGINEERING I", 1, "lab-phy-1");
        let engI = generateTimeTable("890-00X", "รายวิชาภาษาอังกฤษ เทอม 1", 2, "eng-1");

        while(termTwo.parentNode.childNodes[4] != termTwo)
        {
            termTwo.parentNode.removeChild(termTwo.parentNode.childNodes[4]);
        }

        termTwo.parentNode.insertBefore(drawing, termTwo);
        termTwo.parentNode.insertBefore(mecha, termTwo);
        termTwo.parentNode.insertBefore(chem, termTwo);
        termTwo.parentNode.insertBefore(labChem, termTwo);
        termTwo.parentNode.insertBefore(mathI, termTwo);
        termTwo.parentNode.insertBefore(phyI, termTwo);
        termTwo.parentNode.insertBefore(labPhyI, termTwo);
        termTwo.parentNode.insertBefore(engI, termTwo);

        while(termTwo.parentNode.lastChild != termTwo)
        {
            termTwo.parentNode.removeChild(termTwo.parentNode.childNodes[13]);
        }

        let introEng = generateTimeTable("200-101", "INTRO TO ENGINEERING", 1, "intro-eng");
        let introCom = generateTimeTable("242-101", "INTRO TO COMPUTER PROGRAM", 3, "intro-com");
        let mathII = generateTimeTable("322-172", "PHYSICAL SCIENCE MATH II", 3, "math-2");
        let phyII = generateTimeTable("332-104", "PHYSICS FOR ENGINEERING II", 3, "phy-2");
        let labPhyII = generateTimeTable("332-114", "PHYSICS LAB FOR ENGINEERING II", 1, "lab-phy-2");
        let engII = generateTimeTable("890-00Y", "รายวิชาภาษาอังกฤษ เทอม 2", 2, "eng-2");

        termTwo.parentNode.appendChild(introEng);
        termTwo.parentNode.appendChild(introCom);
        termTwo.parentNode.appendChild(mathII);
        termTwo.parentNode.appendChild(phyII);
        termTwo.parentNode.appendChild(labPhyII);
        termTwo.parentNode.appendChild(engII);
    }
}

function generateTimeTable(code,name,time,variable)
{
    var row = document.createElement('tr');
    row.setAttribute("style", "text-align: center; height: 35px; position: relative;");

    var space = document.createElement('td');
    space.setAttribute("style", "width: 2%;");
    space.innerHTML = "&nbsp;";

    var subjectCode = document.createElement('td');
    subjectCode.setAttribute("style", "width: 13%;  font-size: 16px;");
    subjectCode.setAttribute("class", "md-003 round-corner ubuntu");
    subjectCode.innerHTML = code;

    var subjectName = document.createElement('td');
    subjectName.setAttribute("style", "width: 50%;  font-size: 16px;");
    subjectName.setAttribute("class", "md-003 round-corner kanit");
    subjectName.innerHTML = name;

    var subjectTime = document.createElement('td');
    subjectTime.setAttribute("style", "width: 15%;  font-size: 16px;");
    subjectTime.setAttribute("class", "md-003 round-corner ubuntu");
    subjectTime.innerHTML = time;

    var subjectGrade = document.createElement('td');
    subjectGrade.setAttribute("style", "width: 20%;  font-size: 16px; position: relative;");
    subjectGrade.setAttribute("class", "md-003 round-corner kanit");

    var div = document.createElement('div');
    div.setAttribute("class", "kanit");
    div.setAttribute("style", "width: 100%; height: 30px; font-size: 16px; margin-top: 5px")
    div.setAttribute("onclick", "onHover(this.parentNode)");
    
    for(let i=0;i<subject.length;i++)
    {
        if(variable == subject[i].name)
        {
            div.innerHTML = subject[i].grade;
            break;
        }
    }

    subjectGrade.appendChild(div);

    row.appendChild(space);
    row.appendChild(subjectCode);
    row.appendChild(subjectName);
    row.appendChild(subjectTime);
    row.appendChild(subjectGrade);

    return row;
}

function addOption(select, value, text)
{
    var option = document.createElement('option');
    option.text = text; option.value = value;
    select.add(option);
}

function saveVariable(variable, value)
{
    for(let i=0; i<subject.length; i++)
    {
        if(subject[i].name == variable)
        {
            subject[i].grade = value;
            break;
        }
    }
}

function getSubjectVariable(name)
{
    if(name == "215-111" || name == "216-111") return "drawing"
    else if(name == "221-101" || name == "220-102") return "mecha"
    else if(name == "322-172") return "math"
    else if(name == "324-103") return "chem"
    else if(name == "325-103") return "lab-chem"
    else if(name == "332-104") return "phy-2"
    else if(name == "332-114") return "lab-phy-2"
    else if(name == "890-00Y") return "eng-2"
    else if(name == "890-00X") return "eng-1"
    else if(name == "332-103") return "phy-1"
    else if(name == "332-113") return "lab-phy-1"
    else if(name == "322-171") return "math-1"
    else if(name == "200-101") return "intro-eng"
    else if(name == "240-101" || name == "242-101") return "intro-com"
    return ""
}

var sumTime = 30;
var sumGPA = 0;

var gradeTable = [
    {grade:"A",unit:4},
    {grade:"B+",unit:3.5},
    {grade:"B",unit:3},
    {grade:"C+",unit:2.5},
    {grade:"C",unit:2},
    {grade:"D+",unit:1.5},
    {grade:"D",unit:1},
    {grade:"E",unit:0},
    {grade:"Withdrawn",unit:0},
    {grade:"ไม่ลงทะเบียน",unit:0},
    {grade:"",unit:0}
]

var units = [0,0]

function calculateGpa()
{
    for(let i=0;i<subject.length; i++)
    {
        if(subject[i].name == "eng-1"){
            for(let j=0;j<gradeTable.length;j++){
                if(subject[i].grade == gradeTable[j].grade){
                    units[0] += (subject[i].time * gradeTable[j].unit);
                    break;
                }
            }
        }else if(subject[i].name == "eng-2"){
            for(let j=0;j<gradeTable.length;j++){
                if(subject[i].grade == gradeTable[j].grade){
                    units[1] += (subject[i].time * gradeTable[j].unit);
                    break;
                }
            }
        }else{
            for(let j=0;j<gradeTable.length;j++){
                if(subject[i].grade == gradeTable[j].grade){
                    sumGPA += (subject[i].time * gradeTable[j].unit);
                    break;
                }
            }
        }
    }

    if(units[0] >= units[1]){
        sumGPA += units[0];
    }else if(units[0] < units[1]){
        sumGPA += units[1];
    }

    document.getElementById('timeTable').innerHTML = sumTime;

    if(sumTime == 0)
        document.getElementById('gpa').innerHTML = "0.00";
    else
        document.getElementById('gpa').innerHTML = (sumGPA/sumTime).toFixed(2);
    
    sumGPA = 0;
    units[0] = 0; units[1] = 0;
}
