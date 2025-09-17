"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 3,
    title: "MERN Online Doctor Appointment Website",
    description:
    "A full-stack application for booking doctor appointments, managing users, and maintaining schedules using MongoDB, Express, React, and Node.js.",
    image: "/images/projects/doctor-appointment.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dilkhushnapit/Mydoctor",
    previewUrl: "https://mydoctor-frontend2.onrender.com",
  },
  
    {
      id: 2,
      title: "IoT Smart Garbage Monitoring System",
      description:
        "An IoT project that monitors garbage bin levels with sensors, sends GPS-based location alerts via SMS, and helps optimize waste management.",
      image: "/images/projects/iot-garbage.png",
      tag: ["All", "IoT"],
      gitUrl: "/",
      previewUrl: "/",
    },

  {
    id: 5,
    title: "Digital Design Projects in Verilog",
    description:
      "Designs include Flip-Flops, Counters, 4-bit ALU, and other digital circuits for ECE lab assignments using Verilog.",
    image: "/images/projects/verilog.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
