
export function getClasses(letter, dateString) {

    let daysClasses = document.getElementsByClassName(letter);

    let classesArray = [
        {
            "Subject": daysClasses[0].value,
            "Start date": dateString,
            "Start time": "08:00 AM",
            "End time": "08:55 AM"
        },
        
        {
            "Subject": daysClasses[1].value,
            "Start date": dateString,
            "Start time": "09:10 AM",
            "End time": "10:35 AM"
        },
        
        {
            "Subject": daysClasses[2].value,
            "Start date": dateString,
            "Start time": "10:35 AM",
            "End time": "00:00 PM"
        },
        
        {
            "Subject": daysClasses[3].value,
            "Start date": dateString,
            "Start time": "00:30 PM",
            "End time": "01:55 PM"
        },
    ];

    //check if the last hour is filled, if so, add and event 
    if (daysClasses[4].value !== "") {
        classesArray.push(
        {
            "Subject": daysClasses[4].value,
            "Start date": dateString,
            "Start time": "01:55 PM",
            "End time": "03:10 PM"
        }
        );
        
    }

    //check if patios and homerooms are to be added
    if (document.getElementById("patios").checked) {
        classesArray.push(
        {
            "Subject": "Patio",
            "Start date": dateString,
            "Start time": "00:00 PM",
            "End time": "00:30 PM"
        },

        {
            "Subject": "Homeroom",
            "Start date": dateString,
            "Start time": "08:55 AM",
            "End time": "09:10 AM"
        },
        
        );
    }

    //Checks if the letters need to be added
    if (document.getElementById("dias").checked) {
        classesArray.push(
        {
            "Subject": letter,
            "Start date": dateString,
            "Start time": "07:00 AM",
            "End time": "08:00 AM"
        },
        );
    }

    return classesArray;
    
}
