import Button from "@/components/Button";
import starBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative mask-image-gradient-to-b from-transparent to-black/90 to-10% "
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,_var(--tw-gradient-stops))] from-[rgb(140,69,255,.5)_15%] via-[rgb(14,0,36,.5)_78%], to-transparent"></div>
      {/* <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_var(--tw-gradient-stops))] from-white via-[rgb(184,148,255)_37.7%] to-[rgb(24,0,66)] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div> */}
      {/* T shape starts */}
      <div className="bg-purple-500 h-10 w-40 md:w-80 md:h-14 border border-white/20 absolute top-[25%] md:top-[28.25%] left-0 right-0 m-auto bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_var(--tw-gradient-stops))] from-white via-[rgb(184,148,255)_37.7%] to-[rgb(24,0,66)] shadow-[-20px_-20px_50px_rgb(255,255,255,.1),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="bg-purple-500 h-40 w-10 md:h-[300px] md:w-14 border border-white/20 absolute top-[31%] md:top-[45%] bottom-0 m-auto left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_var(--tw-gradient-stops))] from-white via-[rgb(184,148,255)_37.7%] to-[rgb(24,0,66)] shadow-[-20px_-20px_50px_rgb(255,255,255,.1),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* T shape ends */}
      {/* Start Ring 1 */}
      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-white top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* Start Ring 2 */}
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
      {/* Start Ring 3 */}
      <div className="absolute h-[544px] w-[544px] md:h-[980px]  md:w-[980px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* End Ring 3 */}
      <div className="container relative mt-16 md:mt-44">
        <h1 className="text-[90px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,_var(--tw-gradient-stops))] from-white via-white to-[rgba(74,32,138,.5)] text-transparent bg-clip-text text-center md:text-[160px] md:leading-none">
          Triangle
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-2 md:mt-5 text-center max-w-xl mx-auto">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-6 md:mt-36">
          <Button text="join waitlist" size="md:w-44 md:h-12" />
        </div>
      </div>
    </section>
  );
};

/* HTML: <div class="triangle"></div> */
// .triangle {
//   --r:20px; /* border radius */

//   width: 180px;
//   aspect-ratio: 1/cos(30deg);
//   --_g:calc(tan(60deg)*var(--r)) bottom var(--r),#000 98%,#0000 101%;
//   -webkit-mask:
//     conic-gradient(from -30deg at 50% calc(200% - 3*var(--r)/2),#000 60deg,#0000 0)
//      0 100%/100% calc(100% - 3*var(--r)/2) no-repeat,
//     radial-gradient(var(--r) at 50% calc(2*var(--r)),#000 98%,#0000 101%),
//     radial-gradient(var(--r) at left  var(--_g)),
//     radial-gradient(var(--r) at right var(--_g));
//   clip-path: polygon(50% 0,100% 100%,0 100%);
//   background: linear-gradient(45deg,#FA6900,#C02942);
// }
