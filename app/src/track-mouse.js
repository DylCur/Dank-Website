function track(){
    
    const cursor = this.document.getElementById("cursor");

    window.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;


        cursor.style.left = e.pageX-9+"px";
        cursor.style.top = e.pageY-5+"px";

        
    });
}

