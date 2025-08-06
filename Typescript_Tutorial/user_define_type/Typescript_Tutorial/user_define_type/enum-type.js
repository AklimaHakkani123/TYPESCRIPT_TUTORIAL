//ENUM--->store constant,not allow duplicate values
//ENUM types---->1.Numeric 2.String 3.Heteregeneous
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readDate"] = 0] = "readDate";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "readDAta";
    RequestType2["deleteData2"] = "deleteData2";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData2);
