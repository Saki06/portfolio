import React from 'react';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './professional.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Leadership',
      test: 'Experienced in leading teams and coordinating group activities.',
    },
    {
      id: 2,
      name: 'Communication',
      test: "Effective verbal and written communication skills for conveying ideas and information clearly.",
    },
    {
      id: 3,
      name: 'Teamwork',
      test: 'Skilled in collaborating with others to achieve common goals and tasks.',
    }
  ];
  return (
    <section id="professional">
      <h2>Professional Skills</h2>
      <Swiper 
        className="container professional__container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="professional" key={test.id}>
          <h2 className='client__name'>{test.name}</h2>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials