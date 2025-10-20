import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const data = [
    {
      _id: "1",
      serviceName: "Web Development",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Build fast and modern websites using HTML, CSS, JavaScript, and frameworks.",
    },
    {
      _id: "2",
      serviceName: "Mobile App Development",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Create powerful Android and iOS apps using Flutter and React Native.",
    },
    {
      _id: "3",
      serviceName: "UI/UX Design",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Design user-friendly and beautiful interfaces for websites and apps.",
    },
    {
      _id: "4",
      serviceName: "Graphic Design",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Professional logos, posters, and banners for your brand.",
    },
    {
      _id: "5",
      serviceName: "Digital Marketing",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Boost your online presence using SEO, social media, and ads.",
    },
    {
      _id: "6",
      serviceName: "Content Writing",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Write engaging blog posts, articles, and product descriptions.",
    },
    {
      _id: "7",
      serviceName: "Photography",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Capture high-quality photos for events, products, and branding.",
    },
    {
      _id: "8",
      serviceName: "Video Editing",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Edit videos for YouTube, marketing, or personal use.",
    },
    {
      _id: "9",
      serviceName: "Cybersecurity",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Protect systems and networks from online threats and attacks.",
    },
    {
      _id: "10",
      serviceName: "Cloud Hosting",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Deploy and manage your apps using modern cloud solutions.",
    },
    {
      _id: "11",
      serviceName: "AI Chatbot Development",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Create smart chatbots for websites and business automation.",
    },
    {
      _id: "12",
      serviceName: "E-Commerce Solutions",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Launch your online store with payment and product management.",
    },
    {
      _id: "13",
      serviceName: "Software Testing",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription: "Ensure your software is bug-free and high quality.",
    },
    {
      _id: "14",
      serviceName: "Database Management",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription: "Design and maintain secure, efficient databases.",
    },
    {
      _id: "15",
      serviceName: "Game Development",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription: "Develop fun and engaging 2D or 3D games.",
    },
    {
      _id: "16",
      serviceName: "Machine Learning",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Build intelligent systems using AI and machine learning models.",
    },
    {
      _id: "17",
      serviceName: "AR/VR Solutions",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Create immersive augmented and virtual reality experiences.",
    },
    {
      _id: "18",
      serviceName: "Blockchain Development",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Develop decentralized apps and blockchain-based solutions.",
    },
    {
      _id: "19",
      serviceName: "DevOps Consulting",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Automate deployment and CI/CD pipelines for faster delivery.",
    },
    {
      _id: "20",
      serviceName: "IT Support",
      serviceImage: "/images/vondoshamim.png",
      serviceDescription:
        "Get technical help and system maintenance for your business.",
    },
  ];
  return (
    <div>
      <p className="font-bold text-3xl">ServicesPage</p>
      <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {data.map((d, indx) => {
          return (
            <div key={d._id} className="space-y-4 ">
              <Link href={`/services/${d._id}`}>
                <img src={d.serviceImage}></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
