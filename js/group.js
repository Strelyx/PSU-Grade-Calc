function onGroupSelect(group)
{
    document.getElementById('group_status').innerHTML = group
    if(group >= 'A' && group <= 'I')
    {
        document.getElementById('section_status').innerHTML = "บน"
    }else if(group >= 'J' && group <= 'Q'){
        document.getElementById('section_status').innerHTML = "ล่าง"
    }
}