function getMax(nums: number[]): number{
    let maxValue = -1000000000;

    for(let i=0; i< nums.length; i++){
        if(nums[i] > maxValue){
            maxValue = nums[i];
        }
    }

    return maxValue;
}

let ans2 = getMax([23,23,4444,442,3,23]);

console.log(ans2);

interface Address2 {
    city: string;
    pinCode: number;
}

interface User8 {
    name: string;
    age: number;
    addresses: Address2[];
}

let user8: User8 = {
    name: "Vaibhav",
    age: 20,
    addresses: [{city: "Nagpur", pinCode: 442299}, {city: "Pune", pinCode: 446289}],
}

