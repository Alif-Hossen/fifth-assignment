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
