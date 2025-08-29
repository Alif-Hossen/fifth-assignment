ANSWER OF QUESTION NUMBER - ONE - 

    1. getElementById -->

          Ekta element select kore tar id diye.

          Example:

          const myDiv = document.getElementById("main");
    2. getElementsByClassName

          Ekta class name diye shob element select kore.
          Example:

          const boxes = document.getElementsByClassName("box");
    3. querySelector / querySelectorAll

          CSS selector use kore element select kore.

            querySelector -> first match return kore.

            querySelectorAll -> shob match return kore (NodeList).

            Example:

            const firstBox = document.querySelector(".box"); 
            const allBoxes = document.querySelectorAll(".box");

ANSWER OF QUESTION NUMBER - TWO

        Create – document.createElement() .
            EXAMPLE --> const newPara = document.createElement("p");

        Insert – appendChild() ba insertBefore() .
            EXAMPLE --> document.body.appendChild(newPara);
            
ANSWER OF QUESTION NUMBER - THREE

        Event Bubbling holo ekta JavaScript event handling behavior, jekhane ekta element er     
        event (like click) first oi specific element e trigger hoy, tarpor parent elements e 
        step by step propagate hoy up to document.

ANSWER OF QUESTION NUMBER - FOUR

        Event Delegation holo ekta technique jekhane parent element er event listener diye tar 
        child elements er events handle kora hoy, instead of prottek child element e alada 
        listener lagano.

        WHY USEFUL? 
            sob child-e listener lagano lagbe na.
            future e dynamically add kora child o handle kora jay.
            kom code, easy maintain.

ANSWER OF QUESTION NUMBER - FIVE

        preventDefault() --> 
            Event er default browser behavior roke.
            <a> click korle normally page change hoy. preventDefault() use korle page change                 hobe na.

        stopPropagation() -->
            Event er bubbling or capturing roke, mane parent element e jabe na.
            Child button click korle parent <div> listener normally trigger hoy.             
            stopPropagation() use korle parent listener fire hobe na.




            
