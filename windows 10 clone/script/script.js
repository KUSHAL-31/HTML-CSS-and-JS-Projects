function blueImage(){
    document.getElementById("startBtn").src="../images/startBlue.png"
}

function whiteImage(){
    document.getElementById("startBtn").src="../images/startWhite.png"
}


let startBtn = document.getElementById("item1")
let startMenu = document.getElementsByClassName("startMenu")[0]
let searchBtn = document.getElementById("item2")
let searchMenu = document.getElementsByClassName("searchMenu")[0]
let folderBtn = document.getElementById("item3")
let folderMenu = document.getElementsByClassName("folderMenu")[0]



startBtn.addEventListener("click",()=>{
    if(startMenu.style.bottom=='40px'){
        startMenu.style.bottom='-750px'
    }
    else{
        startMenu.style.bottom='40px'
    }
})

searchBtn.addEventListener("click",()=>{
    if(searchMenu.style.bottom=='40px'){
        searchMenu.style.bottom='-700px'
    }
    else{
        searchMenu.style.bottom='40px'
    }
})

folderBtn.addEventListener("click",()=>{
    if(folderMenu.style.top=='-1000px' && folderMenu.style.left=='-1000px'){
        folderMenu.style.top='0'
        folderMenu.style.left='0'
    }
    else{
        folderMenu.style.top='-1000px'
        folderMenu.style.left='-1000px'
    }
})




