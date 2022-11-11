
const WIDTH = 40;
const HEIGHT = 20;



let i = 4;
while (true){
    await new Promise(r => setTimeout(r, 160));
    runFrame(i)
    if(i <= 9){
        i++
    }else{
        i = 5
    }
}




function runFrame( times){
    let frame = new Array(HEIGHT);

    for(let i = 0;i < HEIGHT; i++){
        frame[i] = new Array(WIDTH);
    }
    for(let i = 0; i < HEIGHT; i++) {
        for(let j = 0; j < WIDTH; j++){
            if(j == WIDTH-1){
                
            }
            if (j % times == 0) {
                frame[i][j] = "#";
            } else {
                frame[i][j] = "+";
            }
        }
        frame[i].push("\n");
        
        frame[i] = frame[i].join("");
        
        
        
    }
    frame = frame.join("");
    console.log(frame);
    
}

