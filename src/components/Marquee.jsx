import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { src: "https://ifixit.pk/images/brand/1.jpg", alt: "Apple", class: "apple" },
  { src: "https://ifixit.pk/images/brand/2.jpg", alt: "Samsung", class: "samsung" },
  { src: "https://ifixit.pk/images/brand/8.jpg", alt: "Infinix", class: "infinix" },
  { src: "https://ifixit.pk/images/brand/4.jpg", alt: "Oppo", class: "oppo" },
  { src: "https://ifixit.pk/images/brand/3.jpg", alt: "Vivo", class: "vivo" },
  { src: "https://ifixit.pk/images/brand/7.jpg", alt: "Huawei", class: "huawei" },
  { src: "https://ifixit.pk/images/brand/9.jpg", alt: "Tecno", class: "tecno" },
  { src: "https://ifixit.pk/images/brand/6.jpg", alt: "Google Pixel", class: "pixel" },
  { src: "https://ifixit.pk/images/brand/5.jpg", alt: "OnePlus", class: "oneplus" },
];

const MyMarquee = () => {
  return (
    <div className="marquee-wrapper">
      <Marquee speed={60} gradient={false} pauseOnHover>
        {brands.map((brand, index) => (
          <div className={`brand-logo ${brand.class}`} key={index}>
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MyMarquee;
