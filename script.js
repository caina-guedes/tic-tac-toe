let players=[
    {
        name:'player1', 
        signature:'Shield',
        victoryPaths:[
            {path:[1,2,3],counter:0},
            {path:[4,5,6],counter:0},
            {path:[7,8,9],counter:0},
            {path:[1,4,7],counter:0},
            {path:[2,5,8],counter:0},
            {path:[3,6,9],counter:0},
            {path:[1,5,9],counter:0},
            {path:[7,5,3],counter:0},
        ]
},
    {
        name:'player2', 
        signature:'Sword', 
        victoryPaths:[
            {path:[1,2,3],counter:0},
            {path:[4,5,6],counter:0},
            {path:[7,8,9],counter:0},
            {path:[1,4,7],counter:0},
            {path:[2,5,8],counter:0},
            {path:[3,6,9],counter:0},
            {path:[1,5,9],counter:0},
            {path:[7,5,3],counter:0},
        ]    
    }
    ];
let currentPlayer=players[0];

function play(id){
    let CurrentSquare            = document.getElementById(id);
    if(CurrentSquare.innerText==''){
        CurrentSquare.classList.add(currentPlayer.signature);
        currentPlayer.victoryPaths.forEach((ele)=>{
            for(num of ele.path){
                if (num==id){
                    ele.counter+=1;
                    if(ele.counter==3){
                        alert(`${currentPlayer.name} won the Game!`)
                    }
                }
            }
        })
    }
    currentPlayer= currentPlayer ==players[0]? players[1]: players[0]; 
}



function restart(){
    for(player of players){
        for(path of player.victoryPaths){
                path.counter = 0;
        }
    }
    for(number of [1,2,3,4,5,6,7,8,9]){
        let element = document.getElementById(number);
        element.innerText='';
    }
    currentPlayer=players[0];
}