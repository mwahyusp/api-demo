// FETCH API DATA USING ASYNC AWAIT --------------------------

fetch("https://api.github.com/users/muhammadhaekal")
  .then(async response => {
    let data = await response.json();
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// FETCH API DATA USING RETURN --------------------------

fetch("https://api.github.com/users/muhammadhaekal")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// DISPLAY API DATA TO DOM --------------------------

const list_followers = document.getElementById("list_followers");

fetch("https://api.github.com/users/muhammadhaekal/followers")
  .then(response => {
    return response.json();
  })
  .then(datas => {
    let temp = "";
    datas.forEach(data => {
      temp += `
                <div>
                    Username: ${data.login} <br>
                    <img src="${
                      data.avatar_url
                    }" width="300" height="300"></img>
                </div>
                <hr>
            `;
      list_followers.innerHTML = temp;
    });
  })
  .catch(err => {
    console.log(err);
  });
