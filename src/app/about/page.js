import React from "react";
import Image from "next/image";
import kid from "../../../public/images/kid.jpg";

export default function about() {
  return (
    <div className=" w-full text-center align-middle m-10">
      <img
        className="mx-auto"
        src="/images/mbejani.png"
        alt="Kid"
        width="300"
        height="200"
        style={{ border: "1px solid green", display: "block" }}
      />

      <div className="text-xl font-bold m-10">
        I am &nbsp;
        <span className="text-xl font-bold animate-ping ">Developer</span>
        <span className="text-xl font-bold animate-ping ">Teacher</span>
        <span className="text-xl font-bold animate-ping ">Freelancer</span>
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Python &amp; Android &amp; Web Developer(Front End)</h3>
        <p class="fst-italic">Since 15 years...</p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Birthday:</strong> <span>24 May 1979</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Website:</strong> <span>bejani.zilbir.ir</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Phone:</strong> <span>+98 914 491 4269</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>City:</strong> <span>Tabriz , Iran</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                <span>45</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Degree:</strong> <span>Master</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Emaile:</strong> <span>bejani@gmail.com</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Freelance:</strong> <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
        <p></p>
      </div>
      {/* <h1 class="text-4xl font-bold animate-[fadeIn_2s_ease-in-out]">
        Welcome to My Website
      </h1> */}
      {/* <h1 class="text-4xl font-bold overflow-hidden border-r-4 border-black whitespace-nowrap w-full animate-[typing_3s_steps(10,_end)_1s_1_normal_both], animate-[blink_0.75s_step-end_infinite]">
        Typing Animation...
      </h1> */}
    </div>
  );
}
