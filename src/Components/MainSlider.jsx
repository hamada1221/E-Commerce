import img1 from '../assets/finalProject assets/images/slider-image-2.jpeg';
import img2 from '../assets/finalProject assets/images/slider-image-3.jpeg';
import img3 from '../assets/finalProject assets/images/slider-2.jpeg';
import img4 from '../assets/finalProject assets/images/grocery-banner-2.jpeg';
import img5 from '../assets/finalProject assets/images/grocery-banner.png';
import  Slider  from 'react-slick';

function MainSlider() {



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false

    };

    return (
        <header className='my-5'>
        <div className="row">
            <div className="w-2/3">
                <Slider {...settings}>
                        <img src={img3} alt="" className='w-full h-[400px]' />
                        <img src={img4} alt="" className='w-full h-[400px]' />
                        <img src={img5} alt="" className='w-full h-[400px]' />
                </Slider>
            </div>
            
            <div className="w-1/3">
                    <img src={img1} alt="" className='w-full h-[200px]' />
                    <img src={img2} alt="" className='w-full h-[200px]' />
            </div>
        </div>
        </header>
    );
}

export default MainSlider;