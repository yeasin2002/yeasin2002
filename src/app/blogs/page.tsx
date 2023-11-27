import progressBar from '$assets/3d/ProgressBar.gif';
import Image from 'next/image';

const Blogs = () => {
  return (
    <div className="min-h-screen flex  flex-col  items-center justify-center">
      <h1 className="
      text-4xl font-bold text-center text-gray-300 
      ">Coming Soon</h1>
      <Image src={progressBar} alt="progressBar" className="w-1/2" />
    </div>
  );
};
export default Blogs;
