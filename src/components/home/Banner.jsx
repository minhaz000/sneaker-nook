const Banner = () => {
  return (
    <div className="hero h-[600px] bannerBg">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Step into Style</h1>
          <p className="mb-5 text-left">
            Discover stylish, comfortable sneakers from top brands at SneakerNook. Perfect for the gym, streets, or any
            outfit. Step into style with us!
          </p>
          <button onClick={() => scrollToSection("product")} className="btn btn-primary">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop,
    });
  }
}
