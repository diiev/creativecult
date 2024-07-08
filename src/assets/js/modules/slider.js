import { tns } from "tiny-slider";

const slider = () => { 
try {
   
    
    const _slider = tns({
        container: '.teams__slider2',
        items: 1,
        nav: false,
        navAsThumbnails: true,
        controls: true, 
        gutter: 46,
        loop: true,
        "flexWidth": 400,
    
        responsive: {
            425: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2,
                gutter: 10,
            },
            1440: {
                items: 3,
              
            }
          }
         
    });  
 

  
 
}
   
       catch (e) {}
   

};
export default slider;