"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Res() {
  const [hits, setHits] = useState(0);

  // Fetch the hit count when the component mounts
  useEffect(() => {
    const fetchHitCount = async () => {
      const response = await fetch(`../api/hitcounter?page=/`);
      const data = await response.json();
      setHits(data.hits);
    };

    fetchHitCount();
  }, []);

  return (
    <div className="m-44">
      <div className="max-w-sm m20 rounded overflow-hidden shadow-lg bg-black text-white">
        <img
          className="rounded text-center"
          src="/images/pdf.png"
          title="pdf icons"
          alt="جزوه مبانی طراحی گرافیک"
          width="50"
          height="50"
        />
        <div className="px-6 py-4">
          <a
            href="/assets/graphic.pdf"
            className="font-bold hover:"
            target="_blank"
          >
            <div className="font-bold text-xl mb-2 vazir">
              جزوه مبانی طراحی گرافیک
            </div>
          </a>
          <p className="text-gray-700 text-base vazir">
            شامل مباحث پایه طراحی گرافیک ، مبانی رنگ، خط ، نقطه و نسبتهای طلایی.
          </p>
        </div>
      </div>
      <p className="vazir">تعداد مشاهده {hits} .</p>
    </div>
  );
}
