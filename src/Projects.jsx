import React from "react";

function Projects() {
  const projects = [
    {
      name: "Portfolio using MERN",
      description:
        "A personal portfolio built using the MERN stack (MongoDB, Express, React, Node.js). It showcases projects, skills, and contact details with a clean UI and responsive design. The project includes reusable React components, backend form handling, and smooth navigation.",
    },
    {
      name: "AI PDF Assistant",
      description:
        "An AI-powered PDF assistant built using Streamlit, Firebase, and Gemini API. Users can upload PDFs, extract summaries, ask contextual questions, and save chat history. Includes user authentication and persistent sessions, providing an intelligent and interactive document experience.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-warning mb-4">Projects</h1>

      <div className="row justify-content-center">
        {projects.map((proj, index) => (
          <div key={index} className="col-md-5 w-25 h-25 overflow-auto">
            <div className="card shadow project-card mb-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">{proj.name}</h3>
                <p className="card-text text-secondary mt-2">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
