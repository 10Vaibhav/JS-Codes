interface Address {
    city: string;
    country: string;
    pinCode: number;
}

interface User3 {
    name: string;
    age: number;
    address: Address // One Interface can Use another Interface.

}

interface Office {
    address: Address
}

let user: User3 = {
    name: "Vaibhav",
    age: 21,
    address: {
        city: "Nagpur",
        country: "India",
        pinCode: 440011
    }
}

function isLegal(user: User3): boolean {

    if(user.age >=18){
        return true;
    }else{
        return true;
    }

}

const ans = isLegal(user);

if(ans){
    console.log("I can Vote");
}else{
    console.log("I can not Vote");
}

