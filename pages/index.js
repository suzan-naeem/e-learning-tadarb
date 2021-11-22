import Head from 'next/head'
import axios from 'axios';
import Vimeo from '@u-wave/react-vimeo';
import Navbar from '../src/components/Navbar';
import RelatedCourse from '../src/components/RelatedCourse';


export default function Home({ data }) {
  const { promo_video_url } = data.data
  const url = promo_video_url
  const regex = /\d{9}/;
  const matchedURL = url.match(regex);
  const { discounted_price, price, id, title, description, comments_count, trainer, currency_code, image } = data.data.course_details

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="text-right full-page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-7">
              <div className="links-end bottom">
                <a href="#">الاكثر مبيعا<i className="fas fa-angle-left fa-fw"></i></a>
                <a href="#">حياة <i className="fas fa-angle-left fa-fw"></i></a>
                <a href="#">{title}</a>
              </div>
              <div className="video bottom">
                <Vimeo
                  className="res-video" 
                  video={matchedURL[0]}
                  width={640}
                  height={480}
                  frameborder={0}
                  allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"
                />
              </div>  

              


              <div className="box-typing bottom">

                <ul className="list-unstyled">
                  <h2 className="title">تفاصيل الدورة</h2>
                  <li key={id}>
                    <div dangerouslySetInnerHTML={{
                      __html: description
                    }} />
                  </li>
                </ul>
              </div>







              <div className="box-card-bio">
                <div className="row">
                  <div className="content-box">
                    <div className="info">
                      <img src={trainer.image} alt="trainer"/>
                      <div className="cont-info">
                        <p>{trainer.title}</p>
                        <span>{trainer.name_ar}</span>
                      </div>
                    </div>
                    <div>{trainer.bio}</div>
                  </div>
                </div>
              </div>










              <div className="box-card">
                <h5>مشتركين هذه الدوره إمتلكوا الدورات التاليه أيضا</h5>
                <div className="row">
                  {/* <div className="col-md-6">
                <div className="content-box">
                  <div className="img">
                     <img src={image}/> 
                  </div>
                  <div className="info">
                    <img src={trainer.image} />
                    <div className="cont-info">
                       <p>{title}</p> 
                      <span>{trainer.name_ar}</span>
                    </div>
                  </div>
                  <div className="price">
                    <span>{price} {currency_code}</span> 
                    <a href="#"><i className="fas fa-shopping-cart fa-fw"></i> اضف للسله</a>
                  </div>
                </div>
              </div> */}


                  {/* <div className="col-md-6">
                <div className="content-box">
                  <div className="img">
                      <img src={image}/>  
                  </div>
                  <div className="info">
                    <img src={trainer.image} />
                    <div className="cont-info">
                       <p>{title}</p> 
                      <span>{trainer.name_ar}</span>
                    </div>
                  </div>
                  <div className="price">
                  <span>{price} {currency_code}</span> 
                    <a href="#"><i className="fas fa-shopping-cart fa-fw"></i> اضف للسله</a>
                  </div>
                </div>
              </div>  */}

                  <RelatedCourse key={data.data.id} items={data.data} />






                </div>
              </div>

            </div>
            <div className="col-xs-12 col-md-12 col-lg-5">
              <div className="show-details bottom">
                <h5>{title}</h5>
                <p><span>{price}</span> جنيه مصرى</p>
                <span><del>{discounted_price} جنيه مصرى</del> (خصم 20%)</span>
                <div className="butns">
                  <a href="#"
                  ><i className="fas fa-shopping-cart fa-fw"></i> اضف للسله</a
                  >
                  <a href="#"><i className="far fa-heart fa-fw"></i></a>
                  <a href="#"><i className="fas fa-share fa-fw"></i></a>
                </div>
                <div className="msg">
                  <div className="icon">
                    <i className="fas fa-check-square fa-fw"></i>
                  </div>
                  <div className="content-text">
                    <h5>30 يوم ضمان ذهبى استراد كامل المبلغ</h5>
                    <p>إذا لم تكن راضي عن محتوى الدوره</p>
                  </div>
                </div>
                <ul className="list-unstyled skills">
                  <li><i className="fas fa-clock fa-fw"></i> 8 ساعات تدريبيه</li>
                  <li>
                    <i className="fas fa-file fa-fw"></i> مرفقات حصريه جاهزه للتحميل
                  </li>
                  <li>
                    <i className="fas fa-infinity fa-fw"></i> إمتلاك الدوره مدى الحياه
                  </li>
                  <li>
                    <i className="fas fa-laptop fa-fw"></i> المشاهده من اي موبايل او
                    لابتوب
                  </li>
                  <li>
                    <i className="fas fa-address-card fa-fw"></i> شهادة إتمام اون لاين
                    معتمده
                  </li>
                </ul>
                <div className="msg-wrong">
                  <div className="text-center content-text">
                    <h5>
                      إنضم إلى <span>2 مليون متعلم</span> على منصة تدرب وتعلم
                      مهارة جديده يوميا
                    </h5>
                  </div>
                </div>
                <div className="text-center resultes">
                  هل لديك كوبون خصم؟ <span>ادخل الكوبون</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://developer.tadarab.com/wp-json/api/courses/31222/?country_code=EG`
  );
  return {
    props: {
      data
    },
    revalidate: 200,  //200 seconds 
  };
}