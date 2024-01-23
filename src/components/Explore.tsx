const Explore = () => {
  return (
    <section>
      <div className="container mx-auto min-h-[400px]">
        <div className="h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col justify-center">
          <h3 data-aos="fade-right" className="text-3xl font-semibold mb-8">
            Explore product in new way
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            className="max-w-xs mb-12 text-sm"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quae nobis hic, corrupti accusantium dolores.
          </p>
          <form
            data-aos="fade-up"
            data-aos-delay="1200"
            className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
          >
            <input
              className="bg-gradient-to-t from-[#341d38] to-[#271223] h-12 outline-none px-4"
              type="text"
              placeholder="Your email"
            />
            <button className="btn">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
