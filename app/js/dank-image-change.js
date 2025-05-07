document.querySelectorAll('.dank-image').forEach(function(img) {
    img.addEventListener('click', function () {
        const dankImages = [
            "https://preview.redd.it/o590h4swjt441.png?auto=webp&s=3605483b5c42b017e658a204b821b48fa36338e0",
            "https://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg",
            "https://i.ytimg.com/vi/BcjfZxh5Stg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkYX1apUQ3KqJzMl_EXE9V2Zu3hg",
            "https://i.chzbgr.com/full/9403991808/hF9F4A49E/sunglasses-little-brother-breaks-lego-ninjago-set-so-break-his-neck-just-got-vectored",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHzQpvYkaGcqtg9VDBMP9y8dFWnchG5Z2qA&s",
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454038999i/28797157.jpg",
            "https://i.imgur.com/gdtvWKV.jpeg"
        ]
    
        this.src = dankImages[Math.floor(Math.random() * dankImages.length)];
    
        console.log("Dank");
    });
});
