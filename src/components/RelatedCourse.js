import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function RelatedCourse(props) {
  const { related_courses } = props.items


  const renderSlides = () =>
  related_courses.map(course => (
     
    <div class="col-md-6">
      <div class="content-box">
        <div class="img">
          <img src={course.image} />
        </div>
        <div class="info">
          <img src={course.trainer.image} />
          <div class="cont-info">
            <p>{course.title}</p>
            <span>{course.trainer.name_ar}</span>
          </div>
        </div>
        <div class="price">
          <span>{course.price} {course.currency_code}</span>
          <a href="#"><i class="fas fa-shopping-cart fa-fw"></i> اضف للسله</a>
        </div>
      </div>
   </div>

    
    ));

  return (
    <div className="Appi">
      <Slider dots={true} infinite= {true} slidesToShow={1}  slidesToScroll={1}>

      {renderSlides()}
      </Slider>
    </div>
  );

  
  
}

