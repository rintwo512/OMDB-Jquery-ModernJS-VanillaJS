
// function getData (){    
//     const keyW = document.querySelector("#keyword");
//     keyW.addEventListener("keyup", async function(){
//         const input = document.getElementById("keyword").value;        
//         const data = await coba(input);
//         getUI(data);
//     });
// }



// getData();


// function coba(data){
//     return fetch(`http://www.omdbapi.com/?apikey=b657b74e&s=${data}`)
//         .then(success => success.json())
//         .then(result => result);
// }

// function getUI(datas){
//     datas.Search.forEach(e => {
//         console.log(e.Title);
//     });
// }


// const keyW = document.querySelector("#btn");
// keyW.addEventListener("click", function() {
//     const inp = document.querySelector("#keyword").value;
//     console.log(inp);
//    fetch(`http://www.omdbapi.com/?apikey=b657b74e&s=${inp}`)
//         .then(succ => succ.json())
//         .then(res => {
//             let data = res.Search;
            
//             let card = "";
            
//             for(e of data){                
//                 card += funcUI(e);
//             }
            
            // for(let i = 0; i < data.length; i++){                
            //   card += funcUI(data[i]);
            // }
            
            // res.Search.forEach(el => {
                //   card += funcUI(el);
            // });

//             const cardUI = document.querySelector(".card-cont");

//             cardUI.innerHTML = card;
//         });
// });




// const keyW = document.querySelector("#btn");
// keyW.addEventListener("click", () => {
//     const inp = document.querySelector("#keyword").value;
//     const req = new XMLHttpRequest();

//     req.onreadystatechange = function() {
//         if(req.readyState === 4){
//             if(req.status === 200){
//                 const data = JSON.parse(req.response);
                
//                 let card =  "";
//                 data.Search.forEach(e => {
//                     card += funcUI(e);
//                 });

//                 const cont = document.querySelector(".card-cont");
//                 cont.innerHTML = card;
                
//             }
//         }
//     }

//     req.open("GET", 'http://www.omdbapi.com/?apikey=b657b74e&s=' + inp);
//     req.send();

// });

const keyW = document.querySelector("#btn");

keyW.addEventListener('click', () => {
    const inp = document.querySelector("#keyword").value;
    $.ajax({
        url : "http://www.omdbapi.com/?apikey=b657b74e&s=" + inp,
        success : res => {
            const data = res.Search;
            let card = "";
            for (let i = 0; i < data.length; i++){
                card += funcUI(data[i]);
            }

            $(".card-cont").html(card);
        },
        error : err => {
            alert(err.statusText);
        }
    });
});




function funcUI(m){
    return `<div class="col-md-4 my-5">
    <div class="card" style="width: 18rem;">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-muted">${m.Title}</h5>
          <p class="card-text">${m.Year}</p>
          <a href="#" class="btn btn-primary modal-detail-btn" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.imdbID}">Details</a>
        </div>
      </div>
   </div>`;
}