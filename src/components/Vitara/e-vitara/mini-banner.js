import ESlider from "./e-slider";
import Video from "./video";

export const MiniBanner = ({ src, poster, title, subtitle, desc,sliders }) => {
  return (
    <div className="relative">
      <Video poster={poster} src={src} />

      <div className="absolute z-50 space-y-3 text-white top-20 lg:top-auto lg:bottom-10 left-10">
        <h2 className="font-serif text-2xl font-medium lg:text-6xl">
          {title}
        </h2>
        <h2 className="font-serif text-2xl font-medium lg:text-6xl">
          {subtitle}
        </h2>
        <p className="text-sm font-light lg:text-base">{desc}</p>
      </div>

      <div className="absolute z-50 max-w-screen-lg space-y-3 text-white bottom-10 lg:left-1/2 right-10">
        <div className="relative">
          <ESlider sliders={sliders} />
        </div>
      </div>
    </div>
  );
};
