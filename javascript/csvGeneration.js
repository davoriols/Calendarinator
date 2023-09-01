//function to generate a CSV with a passed array of objects (items)
//copied this code from stack overflow, but it works
export function convertToCSV(array) {
    // Collect all the different keys
    let keys = Object.keys(Object.assign({}, ...array));

    // Build header
    var result = keys.join(",") + "\n";

    // Add the rows
    array.forEach(function (obj) {
        //If there's a field, use the field, else, just add a blank field.
        result += keys.map((k) => {
            let item = "";
            if (obj[k]) item = obj[k]; 
            return item
        }).join(",") + "\n";
    });

    let link = document.createElement('a')
    link.id = 'download-csv'
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result));
    link.setAttribute('download', 'calendar.csv');
    document.body.appendChild(link)
    document.querySelector('#download-csv').click()
    
    
    return result;

    
}
