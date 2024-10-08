import { Image } from "@nextui-org/react";
export const About = () => (
  <section id="about" className="text-center min-h-screen mt-12">
    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
      แนะนำตัวเอง
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Project 1 */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mt-4 text-center">
          <p>
            สวัสดีครับผม นายอภิชาติ เขมวัชรโยธิน
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col items-center">
        <Image
          src="https://kentuckycounselingcenter.com/wp-content/uploads/2022/01/thinking-man-gf9b9e7a8b_1920.png"
          alt="Compete"
          className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
          onClick={() => openModal("/img/compete_y65.jpg", "Compete")}
        />
      </div>
    </div>
  </section>
);
