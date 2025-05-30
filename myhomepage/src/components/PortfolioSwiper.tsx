import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './scss/PortfolioSwiper.scss';

interface Portfolio {
  id: number,
  title: string,
  desc: string,
  skill: String,
  webUrl: string,
  gitUrl: string
}

const PortfolioList: Portfolio[] = [
  {
    id: 0, title: "BABA", desc: `• 백엔드 시스템 안정성 및 성능 개선
• REST API 설계 및 구현 (Spring Boot + JPA)
• MySQL 최적화 / Redis 캐싱 도입
• JWT 기반 인증 및 보안 강화 (CSRF, XSS 방지)
• 메시징 큐 기반 서비스 간 통신
• JUnit + Mockito 테스트 / Jenkins CI-CD 자동화
• 애자일(Jira) 기반 협업 환경 구축`
    , skill: "Spring Boot, Spring Security, JWT, JPA, MySQL", webUrl: "https://naver.com", gitUrl: ""
  },
  {
    id: 1, title: "제목2", desc: "사이트를 리뉴얼함", skill: "Spring Boot, Spring Security, JWT, JPA, MySQL", webUrl: "https://google.com", gitUrl: ""
  },
  {
    id: 2, title: "제목3", desc: "사이트를 리뉴얼함", skill: "Spring Boot, JPA, MySQL", webUrl: "https://kakao.com", gitUrl: ""
  }
]

const PortfolioSwiper = () => {
  return (
    <div className='main portSwiper'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        // autoplay={{delay: 3000}}
        pagination={{ clickable: true }}
      >
        {PortfolioList.map((item) => (
          <SwiperSlide>
            <p><img src={`./images/portfolio_slider_${item.id + 1}.jpg`} alt={item.title} /></p>
            <div className="text-box">
              <h3>{item.title}</h3>
              <p>
                <ul>
                  {item.desc.split('\n').map((line, index) => (
                    <li key={index}>{line.trim()}</li>
                  ))}
                </ul>
              </p>
              <div className="btn-wrap">
                <span>{item.skill}</span>
                <ul>
                  <li><a href={item.gitUrl}>GIT</a></li>
                  <li><a href={item.webUrl}>WEB</a></li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PortfolioSwiper