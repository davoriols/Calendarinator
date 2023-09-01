import { convertToCSV } from "./csvGeneration.js";
import { getClasses } from "./calendar.js";

function main() {
    
    let letters = ["A", "B", "C", "D", "E", "F", "G"];
    let letterNum = 0;
  
    let items = [];

    //list of holidays that need to be skipped
    let holidays = ["9/11/2023", "10/12/2023", "10/13/2023", "11/1/2023", "12/6/2023", "12/7/2023", "12/8/2023", "12/21/2023", "12/22/2023", "12/23/2023", "12/24/2023", "12/25/2023", "12/26/2023", "12/27/2023", "12/28/2023", "12/29/2023", "12/30/2023", "12/31/2023", "1/1/2024", "1/2/2024", "1/3/2024", "1/4/2024", "1/5/2024", "1/6/2024", "1/7/2024", "2/12/2024", "3/4/2024", "3/23/2024", "3/24/2024", "3/25/2024", "3/26/2024", "3/27/2024", "3/28/2024", "3/29/2024", "3/30/2024", "3/31/2024", "4/1/2024", "4/15/2024", "5/1/2024", "5/20/2024"];
    
    //starting date
    let d = new Date("9/4/2023");

    for (let i = 0; i < 293; i++) {

        let dateString = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
        
        if (d.getDay() === 0 || d.getDay() === 6) {
            console.log("weekend");
        }

        else if (holidays.includes(dateString)) {
            console.log("holidays");
        }
        
        else {

            let days = getClasses(letters[letterNum], dateString);

            items.push(...days);

            //cycle to the next letter 
            if (letterNum === 6) {
                letterNum = 0;
            }
            else {
                letterNum += 1;
            }
        }

        //add a day to the date object
        d.setDate(d.getDate() + 1);
        
    }

    console.log(items);
    
    convertToCSV(items); 

}

const button = document.getElementById('button');

button.addEventListener('click', () => {
    main();
});

