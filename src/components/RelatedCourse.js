import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function RelatedCourse(props) {
  const { related_courses } = props.items


  const renderSlides = () =>
  related_courses.map(course => (
     
    <div key={course.id} className="col-md-6">
      <div className="content-box">
        <div className="img">
          <img src={course.image} alt="course"/>
        </div>
        <div className="info">
          <img src={course.trainer.image} alt="trainer" />
          <div className="cont-info">
            <p>{course.title}</p>
            <span>{course.trainer.name_ar}</span>
          </div>
        </div>
        <div className="price">
          <span>{course.price} {course.currency_code}</span>
          <a href="#"><i className="fas fa-shopping-cart fa-fw"></i> اضف للسله</a>
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

