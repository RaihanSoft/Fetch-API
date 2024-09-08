const url = 'https://jsonplaceholder.typicode.com/comments';
fetch(url)
.then(res => res.json())
.then(data => displyData(data))

const container = document.getElementById('container')
function displyData(data){
    data.map(item => {
        console.log(item);
        const div = document.createElement('div')
        div.style.backgroundColor = 'red'
        div.innerHTML = 
        `
        <h2> email: ${item.email} </h2>
        <h2> name: ${item.name} </h2>
        <h2> name: ${item.body} </h2>
        

        
        `
        container.appendChild(div)
    })

}