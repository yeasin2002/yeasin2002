export function Footer() {
  return (
    <footer className="w-full bg-[rgba(71,85,105,.2)] text-[hsla(0,0%,100%,.85)]  py-4 px-6 text-center text-xs md:text-xl">
      <p>
        © {new Date().getFullYear()} yeasin2002.
        <span className="mx-2">All rights reserved.</span>
      </p>
    </footer>
  );
}
