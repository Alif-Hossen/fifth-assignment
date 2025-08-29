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



const transactionData = [];



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

// ONE

// document.getElementById("call_btn1")
//     .addEventListener("click", function (){
//         alert("Calling National Emergency Service 999...?")

//         const coins = document.getElementById("coin_main").innerText
//         console.log(coins)


//         const availableCoins = coins - 20
//         document.getElementById("coin_main").innerText = availableCoins

//         if(availableCoins < 20){
//             alert("You Don't have Enough COins. Minimum 20 coins required To Call.")

//         }

document.getElementById("call_btn1").addEventListener("click", function () {
    const coins = parseInt(document.getElementById("coin_main").innerText);

    if (coins < 20) {
        alert("You don't have enough coins. Minimum 20 coins required to call.");
        return; // coin na thakle baki code run hobe na
    }

    // coin deduct
    const availableCoins = coins - 20;
    document.getElementById("coin_main").innerText = availableCoins;

    // call alert
    alert("Calling National Emergency Service 999...?");

        // **** 

        const data = {
            title : "National Emergency Number",
            number : "999",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)


        // TRANSACTION GET START

        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
                
            }

        // TRANSACTION END

    })

    // two
    document.getElementById("call_btn2").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Police Helpline Service 999...?");
        

        // **** 
        const data = {
            title : "Police Helpline Number",
            number : "999",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
                
            }
        // TRANSACTION END
    })

    // three

    document.getElementById("call_btn3").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Fire Service 999...?");

        // **** 
        const data = {
            title : "Fire Service Number",
            number : "999",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END


    })

    // four
    document.getElementById("call_btn4").addEventListener("click", function () {
            const coins = parseInt(document.getElementById("coin_main").innerText);

            if (coins < 20) {
                alert("You don't have enough coins. Minimum 20 coins required to call.");
                return; // coin na thakle baki code run hobe na
            }

            const availableCoins = coins - 20;
            document.getElementById("coin_main").innerText = availableCoins;

            alert("Calling Ambulance  Service 1994-999999...?");

        // **** 
        const data = {
            title : "Ambulance Service",
            number : "1994-999999",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END

    })

    // five
    document.getElementById("call_btn5").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Women & Child Helpline Service 109...?");

        // **** 
        const data = {
            title : "Woman & Child Helpline",
            number : "109",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END

    })

    // six

    document.getElementById("call_btn6").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Anti-Correuption Helpline Service 106...?");

        // **** 
        const data = {
            title : "Anti-Corruption Helpline",
            number : "106",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END

    })

    // seven

    document.getElementById("call_btn7").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Electricity Helpline Service 16216...?");

        // **** 
        const data = {
            title : "Electricity Helpline",
            number : "16216",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END

    })

    // eight
    document.getElementById("call_btn8").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Brac Helpline Service 16445...?");

        // **** 
        const data = {
            title : "Brac Helpline",
            number : "16445",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END

    })

    // nine
    document.getElementById("call_btn9").addEventListener("click", function () {
        const coins = parseInt(document.getElementById("coin_main").innerText);

        if (coins < 20) {
            alert("You don't have enough coins. Minimum 20 coins required to call.");
            return; // coin na thakle baki code run hobe na
        }

        const availableCoins = coins - 20;
        document.getElementById("coin_main").innerText = availableCoins;

        alert("Calling Bangladesh Railway Helpline Service 163...?");

        // **** 
        const data = {
            title : "Bangladesh Railway Helpline",
            number : "163",
            time: new Date().toLocaleTimeString('en-US', { hour12: true})

        }
        transactionData.push(data)

        // TRANSACTION GET 
        const transaction_container = document.getElementById("transaction_container");
            transaction_container.innerText = ""

            for(const data of transactionData){
                const div = document.createElement("div");
                div.innerHTML = `
                        <div class="flex justify-between items-center  rounded-xl bg-gray-200 m-3 h-[80px] p-3">
                            <div class="">
                                <h1 class="font-bold text-xl">
                                    ${data.title}
                                </h1>
                                <p class="text-gray-500 text-lg">
                                    ${data.number}
                                </p>
                            </div>
                            <div>
                                <p class="text-lg">
                                    ${data.time}
                                </p>
                            </div>
                        </div>
                    
                `;
                transaction_container.appendChild(div)
            }
        // TRANSACTION END

    })


    //  CLEAR BUTTON

    document.getElementById("clear_btn").addEventListener("click", function() {
        transactionData.length = 0;

        const transaction_container = document.getElementById("transaction_container");
        transaction_container.innerHTML = "";

        alert("All transaction info has been deleted!");
});



































