//How to add or store data in the Promise Object using reject()

var promiseObj = new Promise(function (resolve, reject) {
  reject("Something went wrong");
});

console.log(promiseObj);
