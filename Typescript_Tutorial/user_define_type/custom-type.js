var users;
users = [];
var user1;
user1 = { userName: 'hima', userId: 123 };
users.push(user1);
var user2;
user2 = { userName: 'rima', userId: 124 };
users.push(user2);
var user3;
user3 = { userName: 'pinky', userId: 125 };
users.push(user3);
var getRequest;
getRequest = 'Get';
function requestType(requestHandler) {
    console.log(requestHandler);
}
requestType('Get');
