export const Hero = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8 relative">
        <div className=" space-y-6">
          <h1 className=" text-4xl md:text-5xl/relaxed font-bold text-yellow-vibe  font-boldonse text-main-yellow">
            Junior Software Developer
          </h1>
          <p className="text-2xl  max-w-6xl">
            Hi, {`i'm`} Md Kawsar Islam Yeasin. I am a front-end focused Full
            Stack web developer.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        className="absolute inset-0 pointer-events-none max-h-[55vh]"
      />
    </div>
  );
};
