"use client";
import { useState } from "react";
import { Image } from "@nextui-org/react";
import Navbar from "./navbar.js";
import { Link } from "@nextui-org/link";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-full mx-auto px-5 md:px-20 mb-20">
        {/* Competition Section */}
        <section id="competition" className="text-center my-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            ผลงานด้านการแข่งขัน
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/compete_y66.webp"
                alt="Compete"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() => openModal("/img/compete_y66.webp", "Compete")}
              />
              <div className="mt-4 text-center">
                <h2 className="text-yellow-500 font-bold text-3xl mb-2">
                  ได้รับรางวัลชนะเลิศ ระดับชาติ
                  <span className="text-red-500 text-sm">
                    {" "}
                    (100 คะแนนเต็ม){" "}
                  </span>
                </h2>
                <p className="text-gray-300">ปี ๒๕๖๖</p>
                <p className="mt-2 text-gray-400">
                  ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช.
                  งานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.)
                  ระดับชาติ ครั้งที่ ๓๒ ประจำปีการศึกษา ๒๕๖๖ ระหว่างวันที่ ๕-๙
                  กุมภาพันธ์ พ.ศ. ๒๕๖๖ ณ จังหวัดสุพรรณบุรี <br />
                  จัดโดย สำนักงานคณะกรรมการการอาชีวศึกษา
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/compete_y65.jpg"
                alt="Compete"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() => openModal("/img/compete_y65.jpg", "Compete")}
              />
              <div className="mt-4 text-center">
                <h2 className="text-yellow-500 font-bold text-3xl mb-2">
                  ได้รับรางวัลรองชนะเลิศอันดับ 1
                </h2>
                <p className="text-gray-300">ปี ๒๕๖๕</p>
                <p className="mt-2 text-gray-400">
                  ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช.
                  ในงานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย
                  ระดับชาติ ครั้งที่ ๓๑ ประจำปีการศึกษา ๒๕๖๕ ระหว่างวันที่ ๓๐
                  มกราคม - ๓ กุมภาพันธ์ ๒๕๖๖ ณ จังหวัดระยอง <br />
                  จัดโดย สำนักงานคณะกรรมการการอาชีวศึกษา
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="text-center my-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            ผลงานด้านการทำงาน
          </h1>
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <Image
              src="/img/payroll.png"
              alt="PayRoll"
              className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
              onClick={() => openModal("/img/payroll.png", "PayRoll")}
            />
            <div className="mt-4 text-center">
              <h2 className="text-yellow-500 font-bold text-3xl mb-2">
                ระบบ PayRoll
              </h2>
              <p className="text-gray-400">
                เป็นโปรเจคที่ภูมิใจที่สุดของทั้งหมดได้ใช้ความสามารถทั้งหมดในการทำระบบนี้
                เป็นระบบคำนวณเงินเดือนพนักงานแล้วคำนวณเวลาเข้าออกสาย
                จากเครื่องสแกนลายนิ้วมือ และคำนวณโบนัสประจำปี
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Dek-N */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/dek-n.png"
                alt="Dek-N"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() => openModal("/img/dek-n.png", "Dek-N")}
              />
              <div className="mt-4 text-center">
                <Link
                  isExternal
                  href="https://dek-n.com"
                  showAnchorIcon
                  className="text-yellow-500 font-bold text-3xl mb-2"
                >
                  เว็บไซต์ Dek-N
                </Link>
                <p className="text-gray-400">
                  เป็นโปรเจคที่ 3 ที่พัฒนาบน Framework Laravel
                  และเป็นโปรเจคแรกที่นำขึ้นบน Production
                </p>
              </div>
            </div>

            {/* Project บ้านรวยมีโชค */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/banruaymeechoke1991.png"
                alt="บ้านรวยมีโชค"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() =>
                  openModal("/img/banruaymeechoke1991.png", "บ้านรวยมีโชค")
                }
              />
              <div className="mt-4 text-center">
                <h2 className="text-yellow-500 font-bold text-3xl mb-2">
                  บ้านรวยมีโชค
                </h2>
                <p className="text-gray-400">
                  เป็นโปรเจคที่ 4 ที่พัฒนาบน Laravel
                  และเป็นโปรเจคเล็กๆที่นำขึ้นบน Production
                </p>
              </div>
            </div>
          </div>

          {/* Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Project Pongsuphan */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/pongsuphan.png"
                alt="Pongsuphan"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() => openModal("/img/pongsuphan.png", "Pongsuphan")}
              />
              <div className="mt-4 text-center">
                <Link
                  isExternal
                  href="https://www.pongsuphan.co.th/"
                  showAnchorIcon
                  className="text-yellow-500 font-bold text-3xl mb-2"
                >
                  เว็บไซต์ Pongsuphan
                </Link>
                <p className="text-gray-400">
                  ได้ร่วมพัฒนาทำหน้าที่เป็นส่วนของ Tester ของโปรเจคนี้
                </p>
              </div>
            </div>

            {/* Project Jongphra */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/jongphra.png"
                alt="Jongphra"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() => openModal("/img/jongphra.png", "Jongphra")}
              />
              <div className="mt-4 text-center">
                <Link
                  isExternal
                  href="https://www.jongphra.com"
                  showAnchorIcon
                  className="text-yellow-500 font-bold text-3xl mb-2"
                >
                  เว็บไซต์ Jongphra
                </Link>
                <p className="text-gray-400">
                  เป็นโปรเจคที่พัฒนาบน Laravel เป็นโปรเจคที่ได้ทำระบบจ่ายเงิน ทำ
                  Line API ระบบซื้อขายสินค้าล็อกสินค้า <br />
                  รับผิดชอบส่วนของหน้าบ้าน 80% และหลังบ้านอีก 20%
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Project DocSearch */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/assaapp.png"
                alt="DocSearch"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() => openModal("/img/assaapp.png", "DocSearch")}
              />
              <div className="mt-4 text-center">
                <h2 className="text-yellow-500 font-bold text-3xl mb-2">
                  ระบบค้นหาข้อมูล DocSearch
                </h2>
                <p className="text-gray-400">
                  พัฒนาด้วย JavaScript และ TailwindCss เป็นเสริมของระบบ POS ASSA
                  <br /> และมีระบบ Mail สามารถตอบโต้ระหว่าง Admin และ User ได้
                </p>
              </div>
            </div>

            {/* Project acicertified */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src="/img/acicertified.png"
                alt="acicertified"
                className="w-4/5 rounded-lg shadow-lg shake transition-transform duration-300 cursor-pointer mx-auto"
                onClick={() =>
                  openModal("/img/acicertified.png", "acicertified")
                }
              />
              <div className="mt-4 text-center">
                <Link
                  isExternal
                  href="https://www.acicertified.com"
                  showAnchorIcon
                  className="text-yellow-500 font-bold text-3xl mb-2"
                >
                  เว็บไซต์ acicertified
                </Link>
                <p className="text-gray-400">
                  เคยทำหน้าเป็น Tester ในโปรเจคนี้
                  และต่อมาได้รับหน้าที่ในการพัฒนาระบบและดูแลระบบต่อ
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content rotate-90 md:rotate-0" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
