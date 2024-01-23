import Img from "../assets/img/banner-img.png";

import Users from "../components/Users";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1
              data-aos-delay="500"
              data-aos="fade-down"
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug "
            >
              Let's Explore <br />
              Three-Dimensional Visually.
            </h1>
            <p
              data-aos-delay="600"
              data-aos="fade-down"
              className="mb-12 max-w-[440px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus sequi quos eius corporis dolorum saepe.
            </p>
            <div
              data-aos-delay="700"
              data-aos="fade-down"
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          <div data-aos-delay="800" data-aos="fade-up">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
