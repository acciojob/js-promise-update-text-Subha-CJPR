//your JS code here. If required.
function getHelloWorldPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

const outputElement = document.getElementById("output");

getHelloWorldPromise()
  .then(text => {
    outputElement.innerHTML = text;
  });
