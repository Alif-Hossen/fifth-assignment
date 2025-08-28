// // console.log("is It Working?")



//  document.getElementById("heart1")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart

//     })

//  document.getElementById("heart2")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart

//     })

//  document.getElementById("heart3")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })
    
//  document.getElementById("heart4")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })

//  document.getElementById("heart5")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })

//  document.getElementById("heart6")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })
//  document.getElementById("heart7")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })
//  document.getElementById("heart8")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })
//  document.getElementById("heart9")
//     .addEventListener("click", function(){
//         console.log("Heart Clicked");

//         const heartValue = parseInt (document.getElementById("heart_main").innerText)
//         console.log(heartValue) 

//         const totalHeart  = heartValue + 1
//         console.log(totalHeart)

//         document.getElementById("heart_main").innerText = totalHeart
//     })


function handleHeartClick() {
    console.log("Heart Clicked");

    const heartElement = document.getElementById("heart_main");
    let heartValue = parseInt(heartElement.innerText);
    console.log("Current Heart Value:", heartValue);

    heartValue += 1;
    console.log("Updated Heart Value:", heartValue);

    heartElement.innerText = heartValue;
}

for (let i = 1; i <= 9; i++) {
    const heart = document.getElementById("heart" + i);
    if (heart) {
        heart.addEventListener("click", handleHeartClick);
    }
}


// call button

document.getElementById("call_btn1")
    .addEventListener("click", function (){
        alert("Calling National Emergency Service 999...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn2")
    .addEventListener("click", function (){
        alert("Calling Police Helpline 999...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn3")
    .addEventListener("click", function (){
        alert("Calling Fire Service 999...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn4")
    .addEventListener("click", function (){
        alert("Calling Ambulance Service 1994-999999...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn5")
    .addEventListener("click", function (){
        alert("Calling Women & Child Helpline 109...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn6")
    .addEventListener("click", function (){
        alert("Calling Anti-Corruption Helpline 106...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn7")
    .addEventListener("click", function (){
        alert("Calling Electricity HelpLine 16216...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn8")
    .addEventListener("click", function (){
        alert("Calling Brac Helpline 16445...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
document.getElementById("call_btn9")
    .addEventListener("click", function (){
        alert("Calling Bangladesh Railways Helpline 163...?")

        const coins = document.getElementById("coin_main").innerText
        console.log(coins)

        const availableCoins = coins - 20
        document.getElementById("coin_main").innerText = availableCoins

        if(availableCoins < 19){
            alert("You Don't have Enough COins. Minimum 20 coins required To Call.")
        }
    })
