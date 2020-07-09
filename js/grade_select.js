var cSelect;
var isSelect = false;
var dSelect = null;

window.onload = function(ev)
{
	cSelect = document.getElementsByClassName('grade_select');

	for(let select of cSelect)
	{
		select.onclick = function(e)
		{
			e.stopPropagation();
			if(isSelect)
			{
				for(let c of cSelect)
				{
					while(c.children.length > 1)
					{
						c.removeChild(c.children[1]);
					}
					c.children[0].children[0].children[1].innerHTML = "expand_more";
				}
				isSelect = false;
				if(dSelect != select)
				{
					select.appendChild(createDiv(select));
					select.children[0].children[0].children[1].innerHTML = "expand_less";
					isSelect = true;
					dSelect = select;
				}
			}
			else
			{
				select.appendChild(createDiv(select));
				select.children[0].children[0].children[1].innerHTML = "expand_less";
				isSelect = true;
				dSelect = select;
			}
			
		}
	}
}

window.onclick = function(e)
{
	if(isSelect)
	{
		for(let select of cSelect)
		{
			while(select.children.length > 1)
			{
				select.removeChild(select.children[1]);
			}
			select.children[0].children[0].children[1].innerHTML = "expand_more";
		}
	}
}

function createDiv(element)
{
	var div = document.createElement('div');
	div.setAttribute("class", "select_panel");
	div.appendChild(createTable());

	return div;
}

function createTable()
{
	var table = document.createElement('table');
	table.style.width = "100%";
	table.style.borderSpacing = "5px";

	let row_1 = document.createElement('tr');
	let col_1 = document.createElement('td');
	col_1.innerHTML = "A";
	let col_2 = document.createElement('td');
	col_2.innerHTML = "B+";
	let col_3 = document.createElement('td');
	col_3.innerHTML = "B";
	let col_4 = document.createElement('td');
	col_4.innerHTML = "C+";
	row_1.appendChild(col_1);
	row_1.appendChild(col_2);
	row_1.appendChild(col_3);
	row_1.appendChild(col_4);

	let row_2 = document.createElement('tr');
	let col_5 = document.createElement('td');
	col_5.innerHTML = "C";
	let col_6 = document.createElement('td');
	col_6.innerHTML = "D+";
	let col_7 = document.createElement('td');
	col_7.innerHTML = "D";
	let col_8 = document.createElement('td');
	col_8.innerHTML = "E";
	row_2.appendChild(col_5);
	row_2.appendChild(col_6);
	row_2.appendChild(col_7);
	row_2.appendChild(col_8);

	let row_3 = document.createElement('tr');
	let col_9 = document.createElement('td');
	col_9.colSpan = 2;
	col_9.innerHTML = "Withdraw";
	let col_10 = document.createElement('td');
	col_10.colSpan = 2;
	col_10.innerHTML = "ไม่ลงทะเบียน";
	row_3.appendChild(col_9);
	row_3.appendChild(col_10);

	table.appendChild(row_1);
	table.appendChild(row_2);
	table.appendChild(row_3);

	for(let r of table.children)
	{
		for(let c of r.children)
		{
			c.setAttribute("class", "grade_choice");
			c.onclick =  function(ee)
			{
				c.parentNode.parentNode.parentNode.previousSibling.children[0].children[0].innerHTML = c.innerHTML;
				updateArray(c);
			}
		}
	}

	return table;
}

function updateArray(element)
{
	for(let s of subject)
	{
		if(element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].innerHTML === s.name)
		{
			s.grade = element.parentNode.parentNode.parentNode.previousSibling.children[0].children[0].innerHTML;
			break;
		}
	}
	let divGPA = document.getElementById('div-gpa');
	divGPA.children[0].children[0].children[1].children[1].innerHTML = calculateGPA().toFixed(2);
}