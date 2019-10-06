    //1.
    document.getElementsByTagName("title")[0].text = "Today we manipulate with DOM";

    var answerFrontend = confirm("Do you like frontend?");
    console.log(answerFrontend);

    var answerFrontendPlaceholder = document.getElementById("answer-frontend");
    console.log(answerFrontendPlaceholder);

    if (answerFrontend === true) {
        answerFrontendPlaceholder.innerText = "Yes";
    } else {
        answerFrontendPlaceholder.innerText = "No";
    }

    var userProduct = prompt("Please select item to add to the list");
    var shoppingList = document.getElementsByClassName("shopping-list")[0];

    var liElement = document.createElement("li");
    liElement.innerText = userProduct;

    shoppingList.appendChild(liElement);