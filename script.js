/*console.log("work");
document.querySelector(".btn").addEventListener("click",  (e)=>{
    e.preventDefault()
    console.log("cliked please..")
    console.log(username.value, password.value);
        let password = localStorage.getItem("passwords")
        console.log(passwords)
        if(passwords == null){
            let json = []
            json.push({username:username.value, password:password.value})
            alert("password saved");
            localStorage.setItem("passwords", JSON.stringify(json))
        }
        else{
            let json = JSON.parse(localStorage.getItem("passwords"))
            json.push({username:username.value, password:password.value})
            alert("password saved");
            localStorage.setItem("passwords", JSON.stringify(json))

        }
});*/

//Logic for parag
let tb = document.querySelector("table");
let data = localStorage.getItem("passwords");
if (!data) {
  tb.innerHTML = "no data to show";
} else {

  let arr = JSON.parse(data);
  let str = ""
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

 str += `<tr>
<td>${element.website}</td>
<td${element.username}</td>
<td${element.password}</td>
<td${"delete"}</td>
</tr>`;
  }

  tb.innerHTML = tb.innerHTML + str;
}

document.querySelector(".btn").addEventListener("click", (e) => {
  console.log("work");
  e.preventDefault();
  console.log("clicked please..");

  // Declare variables BEFORE using them
  let username = document.querySelector("input[name='username']");
  let password = document.querySelector("input[name='password']");

  // Now accessing them is safe
  console.log(username.value, password.value);

  let passwords = localStorage.getItem("passwords");
  console.log(passwords);

  if (!passwords) {
    let json = [];
    json.push({ username: username.value, password: password.value });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(passwords);
    json.push({ username: username.value, password: password.value });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});
