import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{ backgroundImage: `url(${starBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay mask-image-radial-at-c from-black to-60% to-transparent"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl mx-auto max-w-lg tracking-tighter text-center font-medium">
              Data-driven business approach for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto  text-white/70 px-4 mt-5 tracking-tighter">
              Achieve clear, impactful results without the complexity.
            </p>

            <div className="flex justify-center mt-8">
              <Button text="Join Waitlist" size="w-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
