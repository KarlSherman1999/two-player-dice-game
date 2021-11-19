let start = document.getElementById("newGame");
let header = document.getElementById("header");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let p1Value = document.getElementById("p1Value");
let p2Value = document.getElementById("p2Value");
let p1Total = document.getElementById("p1Total");
let p2Total = document.getElementById("p2Total");
let roller1 = document.getElementById("roller");
let roller2 = document.getElementById("roller2");
let hold = document.getElementById("hold");
let reset = document.getElementById("reset");
let dice = [1, 2, 3, 4, 5, 6];
let sides = document.getElementById("sixSide");
let oneUnlucky = document.getElementById("oneUnlucky");
let twoUnlucky = document.getElementById("twoUnlucky");
let rules = document.getElementById("rules");
let p1Sum = 0
let p2Sum = 0
let p1Hold = 0
let p2Hold = 0

document.addEventListener("keypress",(event)=>{
    if (event.code == "Enter"){
        header.innerHTML = "Game Start"
        start.style.display = "none"
        text1.innerHTML = "Player 1"
        text2.innerHTML = "Player 2"
        p1Total.innerHTML = `Score:${p1Sum}`
        p2Total.innerHTML = `Score:${p2Sum}`
        roller1.style.display = "inline-block"
        hold.style.display = "inline-block"
        sides.style.display = "inline-block"
        reset.style.display = "inline-block"
        rules.style.display = "none"
    }
})
const player1 =()=> {
    p1Score = dice[Math.floor(Math.random()*5)];
    p1Sum = p1Score + p1Sum
    if (p1Sum >= 20){
        p1Total.innerHTML = `Score:${20}`
        oneWinner.style.display = "inline-block"
        roller1.style.display = "none"
        roller2.style.display = "none"
        hold.style.display = "none"
        p1Value.innerHTML = p1Score
    }
    else if (p1Score == 1){
        p1Sum = 0
        oneUnlucky.style.display = "inline-block"
        setTimeout(()=>{
            oneUnlucky.style.display = "none"
        },1500)
        p1Total.innerHTML = `Score:${p1Sum}`
        roller1.style.display = "none"
        roller2.style.display = "inline-block"
        sixSide.src="images/one.png"
        p1Value.innerHTML = p1Score
    }
    else if (p1Score == 2){
        p1Total.innerHTML = `Score:${p1Sum}`
        sixSide.src="images/two.png"
        p1Value.innerHTML = p1Score
    }
    else if (p1Score == 3){
        p1Total.innerHTML = `Score:${p1Sum}`
        sixSide.src="images/three.png"
        p1Value.innerHTML = p1Score
    }
    else if (p1Score == 4){
        p1Total.innerHTML = `Score:${p1Sum}`
        sixSide.src="images/four.png"
        p1Value.innerHTML = p1Score
    }
    else if (p1Score == 5){
        p1Total.innerHTML = `Score:${p1Sum}`
        sixSide.src="images/five.png"
        p1Value.innerHTML = p1Score
    }
    else if (p1Score == 6){
        p1Total.innerHTML = `Score:${p1Sum}`
        sixSide.src="images/six.png"
        p1Value.innerHTML = p1Score
    }
}

const player2 =()=> {
    p2Score = dice[Math.floor(Math.random()*5)];
    p2Sum = p2Score + p2Sum
    if (p2Sum >= 20){
        p2Total.innerHTML = `Score:${20}`
        twoWinner.style.display = "inline-block"
        roller1.style.display = "none"
        roller2.style.display = "none"
        hold.style.display = "none"
        p2Value.innerHTML = p2Score
    }
    else if (p2Score == 1){
        p2Sum = 0
        twoUnlucky.style.display = "inline-block"
        setTimeout(()=>{
            twoUnlucky.style.display = "none"
        },1500)
        p2Total.innerHTML = `Score:${p2Sum}`
        roller2.style.display = "none"
        roller1.style.display = "inline-block"
        sixSide.src="images/one.png"
        p2Value.innerHTML = p2Score
    }
    else if (p2Score == 2){
        p2Total.innerHTML = `Score:${p2Sum}`
        sixSide.src="images/two.png"
        p2Value.innerHTML = p2Score
    }
    else if (p2Score == 3){
        p2Total.innerHTML = `Score:${p2Sum}`
        sixSide.src="images/three.png"
        p2Value.innerHTML = p2Score
    }
    else if (p2Score == 4){
        p2Total.innerHTML = `Score:${p2Sum}`
        sixSide.src="images/four.png"
        p2Value.innerHTML = p2Score
    }
    else if (p2Score == 5){
        p2Total.innerHTML = `Score:${p2Sum}`
        sixSide.src="images/five.png"
        p2Value.innerHTML = p2Score
    }
    else if (p2Score == 6){
        p2Total.innerHTML = `Score:${p2Sum}`
        sixSide.src="images/six.png"
        p2Value.innerHTML = p2Score
    }
}

roller1.addEventListener("click", () => {
    player1()
})

roller2.addEventListener("click", () => {
    player2()
})

reset.addEventListener("click",() =>{
    window.location.reload()
})

hold.addEventListener("click",()=>{
    if (roller1.style.display == "inline-block"){
        roller1.style.display = "none"
        roller2.style.display = "inline-block"
        // p1Hold = p1Sum
    }
    else if (roller2.style.display == "inline-block"){
        roller2.style.display = "none"
        roller1.style.display = "inline-block"
        // p2Hold = p2Sum
    }
})