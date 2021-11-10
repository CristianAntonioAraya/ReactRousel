
export const handleScroll = () => {
    const scrollContainer = document.getElementById('container');
    MoveRight(scrollContainer);
    MoveLeft(scrollContainer);
}
const MoveRight = (scrollContainer) => {
    const ctrlDer = document.getElementById("btnDer");
            ctrlDer.addEventListener('click', () => {
                scrollContainer.scrollBy({
                    top: 0,
                    left: 600,
                    behavior: 'smooth'
                });
                isScrollFullRight(scrollContainer); 
        });
}
const isScrollFullRight = (scrollContainer) =>{
    let scrollsize = scrollContainer.scrollWidth; //Is the distance that the scrollbar travel
    let offsetsize = scrollContainer.offsetWidth; //Include the scrollbar, paddings and margin in the container
    let scrollleft = scrollContainer.scrollLeft;  //Is the actual position respect to right end in the scrollbar
    let endScroll = scrollsize - offsetsize;      //Is the width of the actual bar    
    if(scrollleft === endScroll){
        scrollContainer.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}

const MoveLeft = (scrollContainer) => {
    const ctrlIzq = document.getElementById("btnIzq");
    ctrlIzq.addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: -600,
            behavior: 'smooth'
        });
        isScrollFullLeft(scrollContainer);
    })
}
const isScrollFullLeft = (scrollContainer) => {
    let scrollleft = scrollContainer.scrollLeft;  //Is the actual position respect to right end in the scrollbar
    let scrollsize = scrollContainer.scrollWidth; //Is the distance that the scrollbar travel
    if(scrollleft === 0){
        scrollContainer.scrollTo({
            top: 0,
            left: scrollsize,
            behavior: 'smooth'
        })
    }
}