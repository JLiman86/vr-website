

const Headsets = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12 lg:py-24">
          <h2 className="text-2xl font-semibold mb-4">
            Mixed Reality Headsets
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            <div className="relative aspect-[4/3] bg-[url('src/assets/img/headset-1.png')] bg-no-repeat bg-cover bg-center">
              <div className="absolute p-5 left-0 bottom-0 max-w-[350px] bg-white/20 backdrop-blur-md">
                <h3 className="mb-3 font-medium">Metaverse</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus optio beatae porro molestiae quidem eos!
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-[url('src/assets/img/headset-2.png')] bg-no-repeat bg-cover bg-center">
              <div className="absolute p-5 left-0 bottom-0 max-w-[350px] bg-white/20 backdrop-blur-md">
                <h3 className="mb-3 font-medium">AIoT</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus optio beatae porro molestiae quidem eos!
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-[url('src/assets/img/headset-3.png')] bg-no-repeat bg-cover bg-center">
              <div className="absolute p-5 left-0 bottom-0 max-w-[350px] bg-white/20 backdrop-blur-md">
                <h3 className="mb-3 font-medium">HoloLens</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus optio beatae porro molestiae quidem eos!
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-[url('src/assets/img/headset-4.png')] bg-no-repeat bg-cover bg-center">
              <div className="absolute p-5 left-0 bottom-0 max-w-[350px] bg-white/20 backdrop-blur-md">
                <h3 className="mb-3 font-medium">TPCASTT</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus optio beatae porro molestiae quidem eos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
