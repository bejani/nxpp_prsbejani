import Image from "next/image";
import Navbar from "./menu/page";

export default function Home() {
  const cards = [
    { title: "منابع مفید", description: "This is the first card." },
    { title: "شخصیتهای تاثیرگذار", description: "This is the second card." },
    { title: "نکته های قرآنی", description: "This is the third card." },
    { title: "زبان", description: "This is the fourth card." },
  ];
  return (
    <div className="">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 vazir">
                {card.title}
              </h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className=" rounded overflow-hidden shadow-lg bg-black text-white">
        <img
          className="rounded text-center"
          src="/images/pdf.png"
          title="pdf icons"
          alt="جزوه مبانی طراحی گرافیک"
          width="50"
          height="50"
        />
        
      </div> */}
    </div>
  );
}
