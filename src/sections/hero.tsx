export const Hero = () => {
  return (
    <div
      className="min-h-[50vh]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8 relative">
        <div className=" space-y-6">
          <h1 className=" text-4xl md:text-5xl/relaxed font-bold text-yellow-vibe  font-boldonse text-main-yellow">
            Junior Software Developer
          </h1>
          <p className="text-2xl ">
            In this year’s Octoverse report, we study how public and open source
            activity on GitHub shows how AI is expanding as the global developer
            community surges in size.
          </p>
        </div>
      </div>
    </div>
  );
};
