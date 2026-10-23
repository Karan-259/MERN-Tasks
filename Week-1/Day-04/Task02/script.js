function message() {
    const name = document.getElementById('input').value;
    const heading = document.getElementById('heading')
        if (name === "") {
             heading.innerText = "Hello"
         } else {
              heading.innerText = "Hello, " + name;
         }
}