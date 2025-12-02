let attempts = 0;


const unstableFunction = () => {
    return new Promise((resolve, reject) => {
        attempts++;
        if (attempts < 3) {
            console.log("Attempt failed...");
            reject("Failed connection");
        } else {
            resolve("Success!");
        }
    });
};
const retryPromise = async(unstableFunction, retry) => {
    
    let count = retry 
    
    async function checkTheResukts (retry) {
        if(retry<=0){
            return
        }
        try{
            let ans = await unstableFunction()
            if(ans){
            // console.log("calling the. try:", ans)
            return ans
            }
        }catch(e){
        // console.log("catch:", e)
        const catchingtheans = await checkTheResukts(--retry)
            return catchingtheans
        }


    }
    
const something = await checkTheResukts(retry)
return something;
// console.log("-----",something)

}

retryPromise(unstableFunction, 5)
    .then(result => console.log("Final Result:", result))
    .catch(err => console.error("Final Error:", err));

/*
1. retryPromise 
2. retries number in prop 
*/







// Q1
// function calc (){
//      var count=0
//   return {
//         increment(){
//           return count+=1
//       }
//   }
// }



// const counter = calc();
// console.log(counter?.increment()) //1
// console.log(counter.increment()) //2
