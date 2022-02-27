const allPlayers = ()=>{
    document.getElementById('player-container').innerHTML ='';
    document.getElementById('spinner').style.display='block';
    const searchValue = document.getElementById('search-box').value;
    
    
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    // console.log(url)
    fetch(url)
    .then(Response => Response.json())
    .then(data =>showPlayerDetails(data.player))
    
    // console.log(searchValue); 
}
const showPlayerDetails = (players) =>{
if(players ==true){
    document.getElementById('spinner').style.display='block';
    
}
else{
    document.getElementById('spinner').style.display='none';
    
}
    // console.log(players);
    for(const player of players){
        const parent = document.getElementById('player-container');
    const div = document.createElement('div');
    div.innerHTML=`
    <div class="card border w-50 m-3 p-3">
                    <div class="pro-pic">
                        <img class="w-100" src="${player.strThumb}" alt="">
                    </div>
                    <h3>name:${player.strPlayer}</h3>
                    <h5>country:${player.strNationality}</h5>
                    <p>${player.strPosition}</p>
                    <div class="allbutton">
                        <button class="btn btn-danger  mb-3">delete</button>
                        <button onclick="details('${player.idPlayer}')" class="btn btn-success mb-3">details</button>
                    </div>
                </div>
    `
    parent.appendChild(div);
    }
}

const details =(info)=>{
    // console.log(info)
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data.players[0]));
}

const setDetails =(info) =>{
console.log(info)
if(info.strGender =='Male'){
    document.getElementById('male').style.display ='block';
}
else{
    document.getElementById('female').style.display ='block';
}
document.getElementById('details-container').innerHTML =`
        <img class="w-100" src="${info.strThumb}" alt="">
        </div>
        <h3>name:${info.strPlayer}</h3>
        <h5>country:${info.strNationality}</h5>
         <p>${info.strPosition}</p>

`

}