const data=[
    {
        "company": "Microsoft",
        "type": "Tech",
        "52-week-high":3660.98,
        "52-week-low":2937.18
    },

    {
        "company": "Google",
        "type": "Tech",
        "52-week-high":22728.19,
        "52-week-low":17282.19
    },

    {
        "company": "Apple",
        "type": "Tech",
        "52-week-high": 40991.9,
        "52-week-low": 28391.29
    },

    {
        "company": "Reliance Industry",
        "type": "Tech",
        "52-week-high": 2235.0,
        "52-week-low": 1561.10
    },

    {
        "company": "Bharti Airtel",
        "type": "Telecom",
        "52-week-high": 505.9,
        "52-week-low": 308.29
    },

    {
        "company": "Asian Paints",
        "type": "Decorative",
        "52-week-high": 3077.80,
        "52-week-low": 1587.2
    },

    {
        "company": "Maruti Suzuki India",
        "type": "Manufracture",
        "52-week-high": 8329.2,
        "52-week-low": 5391.3
    },

    {
        "company": "Axis Bank",
        "type": "Bank",
        "52-week-high": 799.00,
        "52-week-low": 360.40
    },

    {
        "company": "Mahindra & Mahindra",
        "type": "Manufracture",
        "52-week-high": 952.05,
        "52-week-low": 492.00
    },

    {
        "company": "ITC",
        "type": "Manufracture",
        "52-week-high": 239.20,
        "52-week-low": 163.35
    }
];

console.table(data);


//Array of object to array of string
function objectToString(d){
    let newString=d.map( element=> `${element.company} has 52week ${element["52-week-high"]} high and ${element["52-week-low"]} low `);;
    return newString;
}

//object to string
function toString(element){
    return (`${element.company} has 52week ${element["52-week-high"]} high and ${element["52-week-low"]} low `)
}

//maping string into new array
const myString=objectToString(data);
console.log(myString);


//sorting of array
//sorting array on the basis of 52-week-low
const sortedArray=data.sort(function(a,b){

    return a.company[0] > b.company[0] ? 1:-1 ;
});

console.table(sortedArray);


let heading="\n\n2019-2020 Stock Market Record :";
newSortedString=objectToString(data);

console.log(heading);
newSortedString.forEach(element => {
    console.log(`\t ${element}`);
});
