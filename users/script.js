fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>displayUsers(data))


  function displayUsers(users){
    let htmlData=``
    users.forEach(u=>{
    
    htmlData+=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${u.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${u.email}</h6>
    <p class="card-text">
    <div>${u.address.city}</div>
    <div>${u.phone}</div>
    </p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>  
    `

    }

    )
    document.querySelector('#result').innerHTML=htmlData
  }

 