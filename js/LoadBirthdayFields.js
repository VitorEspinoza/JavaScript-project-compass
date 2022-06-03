const selectDay = document.querySelector(".select-day");
const selectMonth = document.querySelector(".select-month");
const selectYear = document.querySelector(".select-year");

function AddOptionText(fatherElement, text) {
    const option = document.createElement("option");
    option.text = text;
    fatherElement.appendChild(option);
}

function AddOptionDayBasedFields() {

    const month = selectMonth.options[selectMonth.selectedIndex].text; 
    const year = selectYear.options[selectYear.selectedIndex].text;
    const DaySelected = selectDay.options[selectDay.selectedIndex].text; 
    selectDay.innerHTML = `<option class="invisible"> ${DaySelected} <\option>`;
   
    var isLeapYear = (year % 400 == 0 || (year%4==0 && year%100!=0));
   
    if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
        if (DaySelected > 30 || (isLeapYear && DaySelected > 29) || (!isLeapYear && DaySelected > 28)) {
            selectDay.innerHTML = "";
        }
    }
   
    for (let i = 1; i < 32; i++) {        
        if(month == "2") { 

           

            if(isLeapYear)
            {
                if(i < 30)
                    AddOptionText(selectDay, i);
            }      
            else{
                if(i < 29)
                    AddOptionText(selectDay, i);       
            }

        }
        else if(month == 4 || month == 6 || month == 9 || month == 11)
        {     
            if(i < 31)
            AddOptionText(selectDay, i);
        }
        else {
            AddOptionText(selectDay, i);
        }
    }
}


function AddOption() {
    for (let i = 1; i < 32; i++) 
    AddOptionText(selectDay, i);

    for(let i = 200; i >= 0; i--)
        AddOptionText(selectYear, (new Date().getFullYear() - i));
    
    for (let i = 1; i < 13; i++) 
        AddOptionText(selectMonth, i); 

}

function CalculateAge() {
    const age = document.getElementById("inputAge")
    const DayBirthday = selectDay.options[selectDay.selectedIndex].text;
    const monthBirthday = selectMonth.options[selectMonth.selectedIndex].text; 
    const yearBirthday = selectYear.options[selectYear.selectedIndex].text;

    actualYear = new Date().getFullYear();
    actualMonth = new Date().getMonth();
    actualDay = new Date().getDate();
    
    var diferenceYears = actualYear - yearBirthday;

    if( new Date(actualYear, actualMonth + 1, actualDay) < 
        new Date(actualYear, monthBirthday, DayBirthday))
        {
            diferenceYears--;  
        }   
    
    if (DayBirthday != "" && monthBirthday != "" && yearBirthday != "")
    {
        age.value = diferenceYears;
    }
    else {
        age.value = "18";
    }
    
}
