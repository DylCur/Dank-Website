function dank(){

    // document.addEventListener("keydown", function(){
    //     document.querySelectorAll('.dank-image').forEach(function(img) {
    //         const dankImages = [
    //             "https://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg",
    //             "https://i.ytimg.com/vi/BcjfZxh5Stg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkYX1apUQ3KqJzMl_EXE9V2Zu3hg",
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHzQpvYkaGcqtg9VDBMP9y8dFWnchG5Z2qA&s",
    //             "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454038999i/28797157.jpg"
    //         ]
            
    //         let image = img.src;
    //         while(image == img.src){
    //             image = dankImages[Math.floor(Math.random() * dankImages.length)];
    //         }

    //         img.src = image;
        
    //         console.log(img.src);
    //     });
    // });

    document.querySelectorAll('.dank-image').forEach(function(img) {
        img.addEventListener('click', function () {
            const dankImages = [
                "https://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg",
                "https://i.ytimg.com/vi/BcjfZxh5Stg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkYX1apUQ3KqJzMl_EXE9V2Zu3hg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHzQpvYkaGcqtg9VDBMP9y8dFWnchG5Z2qA&s",
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454038999i/28797157.jpg"
            ]
            
            let image = this.src;
            while(image == this.src){
                image = dankImages[Math.floor(Math.random() * dankImages.length)];
            }

            this.src = image;
        
            console.log(this.src);
        });
    });
}
