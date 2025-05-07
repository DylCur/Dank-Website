function GenerateDankMemes(){

    const dankMemes = [
        "I hate women",
        "Women be like: I think... i'll get the sushi",
        "Women when shopping: ",
        "When the wife won't shutup",
        "Her: Hes probably out cheating || Him: Smoking dank weed with da boiz",
        "Only boys will understand",
        "Gay men be like: I think... i'll get the penis",
        "That feeling when the wife is at work so you can watch football and drink beer",
        "Gay men when buying ducks: ermm... i think ill buy the dick, i mean dick, i mean dick, sorry i mean dick, i mean dick, sorry i mean dick",
        "All my wife does is shop 😂",
        "I can haz cheezburger 😂",
        "Hey dawg, can i get some ice cream? 1000 upvotes for part 2"
    ]

    const num = Math.floor(Math.random() * dankMemes.length);
    
    document.getElementById("memeText").innerHTML = dankMemes[num];
    
}
