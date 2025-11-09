import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/click-3.png" clipClass="contact-clip-path-1" />
          <ImageClipBox
            src="/img/click-4.png"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/click-2.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <p className="mb-10 font-general text-[10px] uppercase">
            THE CYCLE REVEALS ITSELF
          </p>

          <AnimatedTitle
            title="WILL YOU <b>KEEP CLICKING</b> <br /> OR <b>BREAK THE PATTERN</b>?"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <p className="mt-5 max-w-md text-center text-sm text-blue-100/70">
            The archive is open to those willing to see beyond motion.  
            Each access grants insight into the <b>mechanics of compulsion</b>.  
            This is not participation. It is awareness.
          </p>

          <Button
            title="ENTER THE ARCHIVE"
            containerClass="mt-10 cursor-pointer bg-yellow-300 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;