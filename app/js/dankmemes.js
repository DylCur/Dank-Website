function GenerateDankMemes(){

    const dankMemes = [
        "I hate women",
        "Women be like: I think... i'll get the sushi",
        "Women when shopping: ",
        "When the wife won't shutup",
        "Her: Hes probably out cheating || Him: Smoking dank weed with da boiz",
        "Only boys will understand",
        "Women: Out signals are clear why don't hey get me? Their signals: ",
        "Gay men be like: I think... i'll get the penis"
    ]

    const num = Math.floor(Math.random() * dankMemes.length);
    
    document.getElementById("memeText").innerHTML = dankMemes[num];
    
}