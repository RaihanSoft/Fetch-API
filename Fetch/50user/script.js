function dispalyAPI(){
  fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => displayData(data))

}

function displayData(data){
  console.log(data);
  let divTag = document.getElementById("divTag")

  data.map(item => {

    let p = document.createElement("p")
    p.innerText = item.email;
    divTag.appendChild(p)

  })



}