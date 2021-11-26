let person = [
    {
        'FirstName': 'Kundan',
        'LastName': 'Kumar',
        'Office-Address': 'Patna, Bihar'
    },
    {
        'FirstName': 'Ankit',
        'LastName': 'Raj',
        'Office-Address': 'Nalanda, Bihar'
    },
    {
        'FirstName': 'Kishan',
        'LastName': 'Kumar',
        'Office-Address': 'Mumbai'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log(" -> "+key + " : " + val[key]);
}

}