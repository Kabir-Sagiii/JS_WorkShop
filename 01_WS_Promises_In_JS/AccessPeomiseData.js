//AccessPeomiseData.js

var promiseObj = new Promise(function (resolve, reject) {
  reject({
    name: "sagar",
    gender: "male",
  });
});

//How to access data of Promise Object

promiseObj
  .then(function (successdata) {
    console.log("then() executed");
    console.log(successdata);
  })
  .catch(function (errordata) {
    console.log("catch() executed");
    console.log(errordata);
  });
