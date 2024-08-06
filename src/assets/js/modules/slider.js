import { tns } from "tiny-slider";

const slider = () => { 
try {
   
    
    const _sliderTeams = tns({
        container: '#slider-teams',
        items: 3,
        controls: false, 
        loop: true,
        nav: false,
        
        
       
    
        // responsive: {
        //     425: {
        //         items: 1
        //     },
        //     768: {
        //         items: 2
        //     },
        //     1024: {
        //         items: 3,
        //         gutter: 10,
        //     },
        //     1440: {
        //         items: 4,
              
        //     }
        //   }
         
    });  
    document.querySelector('.teams__slider-btn_left').addEventListener('click',function () {
        _sliderTeams.goTo('prev');
      });
      document.querySelector('.teams__slider-btn_right').addEventListener('click',function () {
        _sliderTeams.goTo('next');
      });
    const _sliderHolding = tns({
        container: '#slider-holding',
        items: 4,
        controls: false, 
        loop: true,
        nav: false,
        
        
       
    
        // responsive: {
        //     425: {
        //         items: 1
        //     },
        //     768: {
        //         items: 2
        //     },
        //     1024: {
        //         items: 3,
        //         gutter: 10,
        //     },
        //     1440: {
        //         items: 4,
              
        //     }
        //   }
         
    });  
 
    document.querySelector('.holding__slider-btn_left').addEventListener('click',function () {
        _sliderHolding.goTo('prev');
      });
      document.querySelector('.holding__slider-btn_right').addEventListener('click',function () {
        _sliderHolding.goTo('next');
      });
 
}
   
       catch (e) {}
   

};
export default slider;