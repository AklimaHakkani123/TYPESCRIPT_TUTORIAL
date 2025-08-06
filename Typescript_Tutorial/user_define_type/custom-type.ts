let users:object[];
users=[]

type user={userName:string, userId:number}

let user1:user
user1={userName:'hima',userId:123}
users.push(user1)

let user2:user
user2={userName:'rima',userId:124}
users.push(user2)

let user3:user
user3={userName:'pinky',userId:125}
users.push(user3)




type requestHandler='Get' | 'Post'
let getRequest:requestHandler
getRequest='Get'

function requestType(requestHandler:requestHandler){
    console.log(requestHandler);
    
}
requestType('Get');

