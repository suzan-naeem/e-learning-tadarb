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
      <div class="text-right full-page">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-7">
              <div class="links-end bottom">
                <a href="#">الاكثر مبيعا<i class="fas fa-angle-left fa-fw"></i></a>
                <a href="#">حياة <i class="fas fa-angle-left fa-fw"></i></a>
                <a href="#">{title}</a>
              </div>
              <div class="video bottom">
                <Vimeo
                  video={matchedURL[0]}
                  width={640}
                  height={480}
                />
              </div>


              <div class="box-typing bottom video">

                <ul class="list-unstyled">
                  <h2 class="title">تفاصيل الدورة</h2>
                  <li key={id}>
                    <div dangerouslySetInnerHTML={{
                      __html: description
                    }} />
                  </li>
                </ul>
              </div>







              <div class="box-card-bio">
                <div class="row">
                  <div class="content-box">
                    <div class="info">
                      <img src={trainer.image} />
                      <div class="cont-info">
                        <p>{trainer.title}</p>
                        <span>{trainer.name_ar}</span>
                      </div>
                    </div>
                    <div>{trainer.bio}</div>
                  </div>
                </div>
              </div>










              <div class="box-card">
                <h5>مشتركين هذه الدوره إمتلكوا الدورات التاليه أيضا</h5>
                <div class="row">
                  {/* <div class="col-md-6">
                <div class="content-box">
                  <div class="img">
                     <img src={image}/> 
                  </div>
                  <div class="info">
                    <img src={trainer.image} />
                    <div class="cont-info">
                       <p>{title}</p> 
                      <span>{trainer.name_ar}</span>
                    </div>
                  </div>
                  <div class="price">
                    <span>{price} {currency_code}</span> 
                    <a href="#"><i class="fas fa-shopping-cart fa-fw"></i> اضف للسله</a>
                  </div>
                </div>
              </div> */}


                  {/* <div class="col-md-6">
                <div class="content-box">
                  <div class="img">
                      <img src={image}/>  
                  </div>
                  <div class="info">
                    <img src={trainer.image} />
                    <div class="cont-info">
                       <p>{title}</p> 
                      <span>{trainer.name_ar}</span>
                    </div>
                  </div>
                  <div class="price">
                  <span>{price} {currency_code}</span> 
                    <a href="#"><i class="fas fa-shopping-cart fa-fw"></i> اضف للسله</a>
                  </div>
                </div>
              </div>  */}

                  <RelatedCourse items={data.data} />






                </div>
              </div>

            </div>
            <div class="col-xs-12 col-md-12 col-lg-5">
              <div class="show-details bottom">
                <h5>{title}</h5>
                <p><span>{price}</span> جنيه مصرى</p>
                <span><del>{discounted_price} جنيه مصرى</del> (خصم 20%)</span>
                <div class="butns">
                  <a href="#"
                  ><i class="fas fa-shopping-cart fa-fw"></i> اضف للسله</a
                  >
                  <a href="#"><i class="far fa-heart fa-fw"></i></a>
                  <a href="#"><i class="fas fa-share fa-fw"></i></a>
                </div>
                <div class="msg">
                  <div class="icon">
                    <i class="fas fa-check-square fa-fw"></i>
                  </div>
                  <div class="content-text">
                    <h5>30 يوم ضمان ذهبى استراد كامل المبلغ</h5>
                    <p>إذا لم تكن راضي عن محتوى الدوره</p>
                  </div>
                </div>
                <ul class="list-unstyled skills">
                  <li><i class="fas fa-clock fa-fw"></i> 8 ساعات تدريبيه</li>
                  <li>
                    <i class="fas fa-file fa-fw"></i> مرفقات حصريه جاهزه للتحميل
                  </li>
                  <li>
                    <i class="fas fa-infinity fa-fw"></i> إمتلاك الدوره مدى الحياه
                  </li>
                  <li>
                    <i class="fas fa-laptop fa-fw"></i> المشاهده من اي موبايل او
                    لابتوب
                  </li>
                  <li>
                    <i class="fas fa-address-card fa-fw"></i> شهادة إتمام اون لاين
                    معتمده
                  </li>
                </ul>
                <div class="msg-wrong">
                  <div class="text-center content-text">
                    <h5>
                      إنضم إلى <span>2 مليون متعلم</span> على منصة تدرب وتعلم
                      مهارة جديده يوميا
                    </h5>
                  </div>
                </div>
                <div class="text-center resultes">
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