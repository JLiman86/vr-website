import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section>
      <div className="container mx-auto pb-48">
        <div className="bg-blue-950/20 pt-10 pb-24 relative">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <h2
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-2xl font-semibold mb-8"
            >
              What our clients say
            </h2>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex odit tempore voluptas doloremque voluptatum?
            </p>
          </div>
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-11/12">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
