import HeroRings from "./HeroRings";

export function HeroRingsWrapper() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <HeroRings />
    </div>
  );
}
