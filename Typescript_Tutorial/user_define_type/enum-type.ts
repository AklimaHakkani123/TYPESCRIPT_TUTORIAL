//ENUM--->store constant,not allow duplicate values
//ENUM types---->1.Numeric 2.String 3.Heteregeneous

enum RequestType{
    readDate,
    saveData,
    deleteData
}
console.log(RequestType);
//string
enum RequestType2{
    readData='readDAta',
    deleteData2='deleteData2'
}
console.log(RequestType2.deleteData2);
