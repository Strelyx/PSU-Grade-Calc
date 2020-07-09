function calculateGPA()
{
    let gpa = 0;
    let eng = 0;
    for(let s of subject)
    {
        if(s.name == "รายวิชาภาษาอังกฤษ เทอม 1" || s.name == "รายวิชาภาษาอังกฤษ เทอม 2")
        {
            if(s.time * measureGrade(s.grade) > eng)
            {
                eng = s.time * measureGrade(s.grade);
            } 
        }else{
            gpa += measureGrade(s.grade) * s.time;
        }
    }
    gpa += eng;
    return gpa / 30;
}

function measureGrade(char)
{
    if(char == "A") return 4;
    else if(char == "B+") return 3.5;
    else if(char == "B") return 3;
    else if(char == "C") return 2.5;
    else if(char == "D+") return 2;
    else if(char == "D") return 1.5;
    else if(char == "E") return 1;
    return 0;
}