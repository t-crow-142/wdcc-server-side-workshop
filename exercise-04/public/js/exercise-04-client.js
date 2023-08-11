window.addEventListener("load", function () {

    fetchGreeting();

    async function fetchGreeting() {
        const response = await fetch("./getGreeting?name=Andrew");
        const json = await response.json();
        displayGreeting(json);
    }

    function displayGreeting(greeting) {
        document.querySelector("#fetch-result").innerHTML = greeting.message;
    }

});