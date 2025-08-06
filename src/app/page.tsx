// src/app/page.tsx

'use client';
import React from 'react';
import Image from 'next/image'
export default function Home() {
  return (
    <>
     
     <section className="first-aid-medicine">
  <div className="container">
    <div className="row gy-4">
      <div className="col-md-6 col-12 text-btn">
        <h1>FIRST AID MEDICINE</h1>
        <span>
          Highest rated Course for General Practitioners, AMC MCQ, CLINICAL and PESCI exams
        </span>
        <a href="#" className="primary-btn">Join Our Comprehensive Course</a>
      </div>

      <div className="col-md-6 col-12 text-image">
        <div className="image-text-wrapper">
          <div className="text-box firstaidmedicine">
            <span className="heading">FirstAidMedicine</span>
            <p>
              offers the most successful online courses for doctors working as a general practitioner in Australia as
              well as appearing AMC MCQ, CLINICAL &amp; PESCI exams.
            </p>
          </div>

          <div className="text-box years-experience">
            <span className="heading">10+</span>
            <p>Years Experience</p>
          </div>

          <div className="image">
            <img src="/assets/images/home-section-1.png" alt="FIRST AID MEDICINE" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="who-we-are py-5 mt-3">
  <div className="container">
    <div className="row image-text-wrapper gy-3">
      <div className="col-xl-6 col-lg-6 col-md-12 col-12">
        <div className="image">
          <div className="image-box success-rate">
            <span className="heading">99%</span>
            <p>Success rate</p>
          </div>
          <div className="image-box students">
            <span className="heading">10000+</span>
            <p>Students</p>
          </div>
          <img src="/assets/images/who-we-are.png" alt="who-we-are" />
        </div>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-12 col-12">
        <div className="text">
          <h2>Who We Are</h2>
         <p>
          First AID AMC is a Registered AMC MCQ, Clinical and PESCI Preparatory Course. We have been helping IMG doctors for quite a few years to achieve their dreams and goals with an amazing success rate!
          We promise you that if you follow our guidelines, classes, and course materials, there is more than 90% chance of success in your exam. In the unlikely 10% of cases, we will continue our support until you pass the exam.
          When you are under us, we take your responsibility fully and effectively.
        </p>

        </div>

        <div className="success-count-wrapper">
          <div className="success-count">
            <span>8000+</span>
            <p>Passed Students</p>
          </div>

          <div className="success-count">
            <span>99%</span>
            <p>Success Rate</p>
          </div>

          <div className="success-count">
            <span>3000+</span>
            <p>
              Working as a doctor <br /> in Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
<section className="popular-courses py-5">
  <div className="container">
    <h2 className="text-center">Most Popular Courses</h2>

    <div className="custom-card-wrapper pt-5 mt-5">
  
      <div className="custom-card card-shadow">
        <h3>
          5 months <br /> Extensive MCQ Course
        </h3>
        <div className="price">
          <span>Price: 499 AUD +</span>
          <span className="gst">10% gst</span>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <ul className="keypoints">
              <li className="keypoint-item">Comprehensive 5-Month MCQ-Focused Study Plan</li>
              <li className="keypoint-item">1,500+ High-Yield MCQs Covering Key Topics</li>
              <li className="keypoint-item">Weekly Live/Online Interactive Sessions</li>
              <li className="keypoint-item">Self-Paced Pre-Recorded Video Lectures</li>
              <li className="keypoint-item">Registration Opens: 27 Nov 2024</li>
            </ul>
            <span className="plus-more">More</span>
          </div>
          <div className="custom-card-btn">
            <a href="#" className="card-btn check-info">Check info</a>
            <a href="#" className="card-btn register">Register now</a>
          </div>
        </div>
      </div>

      
      <div className="custom-card card-shadow">
        <h3>
          5 months <br /> Extensive Clinical Course
        </h3>
        <div className="price">
          <span>Price: 899 AUD +</span>
          <span className="gst">10% gst</span>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <ul className="keypoints">
              <li className="keypoint-item">Comprehensive 5-Month Clinical Skills Development Program</li>
              <li className="keypoint-item">Focus on Real-World Scenarios and Case Discussions</li>
              <li className="keypoint-item">Weekly Live/Online Interactive Sessions</li>
              <li className="keypoint-item">Self-Paced Pre-Recorded Video Lectures</li>
              <li className="keypoint-item">Registration Opens: 27 Nov 2024</li>
            </ul>
            <span className="plus-more">More</span>
          </div>
          <div className="custom-card-btn">
            <a href="#" className="card-btn check-info">Check info</a>
            <a href="#" className="card-btn register">Register now</a>
          </div>
        </div>
      </div>

    
      <div className="custom-card card-shadow">
        <h3>Clinical Mock Test</h3>
        <div className="price">
          <span>Price: 499 AUD +</span>
          <span className="gst">10% gst</span>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <ul className="keypoints">
              <li className="keypoint-item">Comprehensive 5-Month MCQ-Focused Study Plan</li>
              <li className="keypoint-item">1,500+ High-Yield MCQs Covering Key Topics</li>
              <li className="keypoint-item">Weekly Live/Online Interactive Sessions</li>
              <li className="keypoint-item">Self-Paced Pre-Recorded Video Lectures</li>
              <li className="keypoint-item">Registration Opens: 27 Nov 2024</li>
            </ul>
            <span className="plus-more">More</span>
          </div>
          <div className="custom-card-btn">
            <a href="#" className="card-btn check-info">Check info</a>
            <a href="#" className="card-btn register">Register now</a>
          </div>
        </div>
      </div>

 
      <div className="custom-card card-shadow">
        <h3>
          CLINICAL Physical <br /> Examination Course
        </h3>
        <div className="price">
          <span>Price: 690 AUD +</span>
          <span className="gst">10% gst</span>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <ul className="keypoints">
              <li className="keypoint-item">Comprehensive Guide to Physical Examination Techniques</li>
              <li className="keypoint-item">Live Demonstrations by Experienced Clinicians</li>
              <li className="keypoint-item">Hands-On Practice Sessions for Key Skills</li>
              <li className="keypoint-item">Detailed Checklists for Structured Examinations</li>
              <li className="keypoint-item">Registration Opens: 27 Nov 2024</li>
            </ul>
            <span className="plus-more">More</span>
          </div>
          <div className="custom-card-btn">
            <a href="#" className="card-btn check-info">Check info</a>
            <a href="#" className="card-btn register">Register now</a>
          </div>
        </div>
      </div>

  
      <div className="custom-card card-shadow">
        <h3>FIRST AID PESCI</h3>
        <div className="price">
          <span>Price: 690 AUD +</span>
          <span className="gst">10% gst</span>
        </div>
        <div className="content-container">
          <div className="content-wrapper">
            <ul className="keypoints">
              <li className="keypoint-item">Comprehensive 5-Month MCQ-Focused Study Plan</li>
              <li className="keypoint-item">1,500+ High-Yield MCQs Covering Key Topics</li>
              <li className="keypoint-item">Weekly Live/Online Interactive Sessions</li>
              <li className="keypoint-item">Self-Paced Pre-Recorded Video Lectures</li>
              <li className="keypoint-item">Registration Opens: 27 Nov 2024</li>
            </ul>
            <span className="plus-more">More</span>
          </div>
          <div className="custom-card-btn">
            <a href="#" className="card-btn check-info">Check info</a>
            <a href="#" className="card-btn register">Register now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>


<section className="feedback-section py-5 mt-5">
  <div className="container">
    <div className="row gy-3 pt-4">
      
      <div className="col-xl-6 col-lg-6 col-md-12 col-12">
        <div className="image">
          <div className="image-box success-rate satisfied-students">
            <span className="heading">10000+</span>
            <p>Satisfied Students</p>
          </div>

          <div className="image-box success-rate review-rating">
            <span className="heading">5 / 5</span>
            <div className="rating-stars">
              <span className="star"><i className="bi bi-star-fill"></i></span>
              <span className="star"><i className="bi bi-star-fill"></i></span>
              <span className="star"><i className="bi bi-star-fill"></i></span>
              <span className="star"><i className="bi bi-star-fill"></i></span>
              <span className="star"><i className="bi bi-star-fill"></i></span>
            </div>
            <p>3265 ratings</p>
          </div>

          <div className="image-box firstaidmedicine">
            <span className="heading">FirstAidMedicine</span>
            <p>
              offers extensive online courses for IMG&apos;s preparing for AMC MCQ, CLINICAL and PESCI exams to ensure
              their success in the first attempt.
            </p>
          </div>

          <div className="image-box success-rate success-rate-rate">
            <span className="heading">99%</span>
            <p>Success Rate</p>
          </div>

          <Image src="/assets/images/feedback-image.png" alt="feedback image"  width={400}  height={300} />
          
        </div>
      </div>

      
      <div className="col-xl-6 col-lg-6 col-md-12 col-12">
        <h2>Valuable Feedback from Our Students</h2>
        <div className="feedback-slider owl-carousel owl-theme">
         
          <div className="item">
            <div className="feedback-box">
              <div className="profile-image">
                <img src="/assets/images/portrait-smiling.png" alt="feedback-profile-image" />
              </div>
              <div className="feedback-rating rating-stars">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span className="star" key={i}>
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
              </div>
              <div className="feedback-text">
                <p>
                  &quot;The course exceeded my expectations, and the support from instructors made all the difference.&quot;
                </p>

              </div>
              <span className="feedback-profile-name">Joel</span>
            </div>
          </div>

          
          <div className="item">
            <div className="feedback-box">
              <div className="profile-image">
                <img src="/assets/images/portrait-smiling.png" alt="feedback-profile-image" />
              </div>
              <div className="feedback-rating rating-stars">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span className="star" key={i}>
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
              </div>
              <div className="feedback-text">
                <p>
  &quot;The course exceeded my expectations, and the support from instructors made all the difference.&quot;
</p>

              </div>
              <span className="feedback-profile-name">Joel</span>
            </div>
          </div>

         
          <div className="item">
            <div className="feedback-box">
              <div className="profile-image">
                <img src="/assets/images/portrait-smiling.png" alt="feedback-profile-image" />
              </div>
              <div className="feedback-rating rating-stars">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span className="star" key={i}>
                      <i className="bi bi-star-fill"></i>
                    </span>
                  ))}
              </div>
              <div className="feedback-text">
                <p>
  &quot;The course exceeded my expectations, and the support from instructors made all the difference.&quot;
</p>

              </div>
              <span className="feedback-profile-name">Joel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="upcoming-course pb-4 mb-5">
  
  <div className="container">
    <h2 className="text-center">Upcoming Course</h2>

    <div className="upcoming-course-slider owl-carousel owl-theme">
      
      {[
        {
          title: "CLINICAL Physical Examination Course",
          price: "499 AUD",
        },
        {
          title: "5 Months Extensive Clinical Course",
          price: "899 AUD",
        },
        {
          title: "6 Weeks PESCI Preparation Course",
          price: "899 AUD",
        },
        {
          title: "5 Months Extensive Clinical Course",
          price: "899 AUD",
        },
      ].map((course, i) => (
        <div className="item" key={i}>
          <div className="custom-card card-shadow">
            <span className="open-now">Open Now</span>
            <h3>
              {course.title.split("<br>").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
            <div className="price">
              <span>Price: {course.price} +</span>
              <span className="gst">10% gst</span>
            </div>
            <div className="content-container">
              <div className="content-wrapper">
                <ul className="keypoints">
                  <li className="keypoint-item">Next Course : 17th January 2025</li>
                  <li className="keypoint-item">
                    Trial Class : 28th December 2024 at 8:30 PM Sydney time on ZOOM.
                  </li>
                  <li className="keypoint-item">
                    ZOOM ID: 895 6141 4111 Passcode: 93234 Official Facebook group link : Join this group for
                    detailed information:{" "}
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      facebook.com
                    </a>
                  </li>
                  <li className="keypoint-item">2 weeks free Session : 28th December 2024.</li>
                </ul>
              </div>
              <div className="custom-card-btn">
                <a href="#" className="card-btn check-info">
                  Check info
                </a>
                <a href="#" className="card-btn register">
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

</section>


<section className="latest-blog">
  <div className="container">
    <h2 className="text-center">Latest Blog</h2>

    <div className="posts-slider owl-carousel owl-theme">
      {[
        {
          img: "/assets/images/blog-1.png",
          title: "FIRST AID AMC CLINICAL May and June 2024 Passed Candidate",
          excerpt: "Their dedication, hard work, and commitment to excellence have paid off.....",
        },
        {
          img: "/assets/images/blog-2.png",
          title: "GP PATHWAY AUSTRALIA",
          excerpt: "Their dedication, hard work, and commitment to excellence have paid off.....",
        },
        {
          img: "/assets/images/blog-3.png",
          title: "FIRST AID AMC CLINICAL May and June 2024 Passed Candidate",
          excerpt: "Their dedication, hard work, and commitment to excellence have paid off.....",
        },
        {
          img: "/assets/images/blog-2.png",
          title: "GP PATHWAY AUSTRALIA",
          excerpt: "Their dedication, hard work, and commitment to excellence have paid off.....",
        },
      ].map((post, index) => (
        <a href="#" className="post-item" key={index}>
          <div className="post-image">
            <img src={post.img} alt="blog post" />
          </div>
          <div className="post-title">
            <h3>{post.title}</h3>
          </div>
          <div className="post-excerpt">
            <p>{post.excerpt}</p>
          </div>
          <div className="post-link">
            <span>Read more</span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
<section className="video-section pt-5">
  <div className="container">
    <h2 className="text-center">Video</h2>

    <div className="posts-slider owl-carousel owl-theme">
      {[
        {
          img: "/assets/images/video-1.png",
          title: "FIRST AID AMC MCQ Review Session on Psychiatry June 2022",
        },
        {
          img: "/assets/images/video-2.png",
          title: "FIRST AID AMC CLINICAL NEW COURSE (Starting 21st August 2021)",
        },
        {
          img: "/assets/images/video-3.png",
          title: "FIRST AID AMC MCQ Review Session on Psychiatry June 2022",
        },
        {
          img: "/assets/images/video-2.png",
          title: "FIRST AID AMC CLINICAL NEW COURSE (Starting 21st August 2021)",
        },
      ].map((video, index) => (
        <a href="#" className="post-item" key={index}>
          <div className="post-image">
            <img src={video.img} alt="blog post" />
          </div>
          <div className="post-title">
            <h3>{video.title}</h3>
          </div>
          <div className="post-link">
            <span>Watch video</span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
<section className="contact-us-section py-5 my-5">
  <div className="bg-image">
    <img src="/assets/images/contact-us-bg.png" alt="bg-image" />
  </div>
  <div className="container">
    <div className="row gy-5">
     
      <div className="col-lg-6 col-md-6 col-12 position-relative">
        <div className="content-wrapper">
          <h2>Smart Learning for Smarter Results!</h2>
          <div className="contact-email-box">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
            </span>
            <span className="heading">Email</span>
            <a href="mailto:firstaidamc4536@outlook.com" className="email-text">
              firstaidamc4536@outlook.com
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-12">
        <div className="form-wrapper">
          <h2 className="text-center pb-3">Contact Us</h2>
          <form id="contact-us-form" className="contact-us-form">
            <fieldset>
              <div className="form-field">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="contact-us-name" id="full-name" placeholder="Enter Your Full Name *" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" name="contact-us-email" id="email" placeholder="Enter Your Email *" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="contact-us-subject" id="subject" placeholder="Enter Your Subject *" />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone No</label>
                <input type="tel" name="contact-us-phone" id="phone" placeholder="Enter Your Phone No *" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea name="contact-us-message" id="message" placeholder="Enter Your Message *"></textarea>
              </div>

              <div className="form-field">
                <button type="submit" className="send-message">Send Message</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="faqs-section py-5 my-5">
  
  <div className="container">
    <h2 className="text-center pb-5">FAQs</h2>

    <div className="faqs-box-wrapper">
 
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div className="faq-box" key={i}>
            <div className="faq-title">
              <span>How can I book FirstAidAMC for an event?</span>
            </div>
            <div className="faq-description">
              <p>
                You can easily book our services by contacting us through our website or calling our customer support.
                We’ll assess your requirements and provide the appropriate coverage.
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
  
</section>

    
    </>
  )
}
