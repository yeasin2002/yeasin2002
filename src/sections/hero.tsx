export const Hero = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8 relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl/relaxed font-bold text-yellow-vibe font-boldonse">
            The most comprehensive guide to software development patterns and
            principles.
          </h1>
        </div>
      </div>
    </>
  );
};
