import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import MainButton from "../components/ui/MainButton";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceList from "../components/layout/ServiceList";
import ProjectList from "../components/layout/ProjectList";
import PlusPointList from "../components/layout/PlusPointList";
import ReviewList from "../components/layout/ReviewList";

export default function Home() {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.screen.width);
    }
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="text-primary-black">
      <Head>
        <title>Andreas Notokusumo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="px-6"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        <h2 className="text-[48px] font-bold pt-[24px]">Hi, I'm Andre!</h2>
        <p className="text-[20px] pt-[16px]">
          A fullstack web and mobile developer and a UI/UX enthusiast based in
          Indonesia. I craft production-grade website and mobile app that your
          users will love!
        </p>
        <div className="pt-[40px]">
          <MainButton content="Let's talk" />
        </div>
      </div>
      <div
        className="pt-16"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <Image
          src="/images/hero_img.png"
          width={screenWidth}
          height={screenWidth * 0.9}
        />
      </div>
      <div
        className="px-6"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <SectionHeader title={"What do I do?"} subtitle={"MY SERVICES"} />
        <ServiceList />
      </div>
      <div
        className="px-6"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
      >
        <SectionHeader
          title={"Some of the best projects by me!"}
          subtitle={"FEATURED PROJECTS"}
        />
        <ProjectList />
      </div>
      <div>
        <div
          className="px-6"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="250"
        >
          <SectionHeader title={"About Me"} />
        </div>
        <div
          className="pt-10"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="250"
        >
          <Image
            src="/images/about_me_img.png"
            width={screenWidth}
            height={screenWidth * 0.9}
          />
        </div>
        <div className="px-8 pt-6 leading-loose text-lg relative inline-block space-y-1">
          <p>
            Hi again! My name is Andre. I'm an Indonesian full-stack web
            developer, mobile developer, and UI/UX enthusiast. Today, I
            experience myself as a college student in Jakarta and a part-time
            freelancer.{" "}
          </p>
          <p>
            I started coding at the age of twelve, and I haven't stopped since!
            I adore the capabilities of any form of technology that I've ever
            met, especially the computer. Right about two years ago, I started
            my freelancing career with only some skills on my belt and when I'm
            still a high schooler! From that point, I started learning
            full-stack web development and mobile development using Flutter and
            Swift while gradually gaining more and more client connections.
          </p>
          <div className="w-full h-64 absolute left-0 bottom-[2.75px] bg-gradient-to-t from-white z-10" />
        </div>
        <div className="z-30 px-6">
          <MainButton
            content="Read more about me..."
            isInversed={true}
            onClick={() => {
              router.push("/about");
            }}
          />
        </div>
      </div>
      <div className="px-6">
        <SectionHeader title={"But... why me?"} />
        <p className="text-lg pt-4 leading-loose opacity-50">
          As a solo practitioner, I'm always 100% into your project and with my
          well-documented workflow, every collaboration with your existing team
          like a breeze.
        </p>
        <PlusPointList />
      </div>
      <div className="px-6">
        <SectionHeader title={"Don’t just take my words"} />
        <p className="text-lg pt-4 leading-loose opacity-50">
          I’m proud that across my freelancing career, I’ve met wonderful people
          to work with and it’s a relieve that they absolutely love the final
          output of my projects!
        </p>
        <ReviewList />
      </div>
      <div className="px-6 mb-24">
        <SectionHeader
          title={"Let's work together!"}
          subtitle={"LIKE WHAT YOU SEE?"}
        />
        <p className="text-lg pt-4 leading-loose mb-8">
          If you got anything in your mind about a brilliant app idea, don’t
          hesitate to contact me down below! But, it will be great too if you
          just want say hello, you know?
        </p>
        <MainButton content={"Get in touch!"} />
      </div>
    </div>
  );
}
