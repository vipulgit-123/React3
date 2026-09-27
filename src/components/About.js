import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-4">
        {" "}
        {/* Header */}{" "}
        <div className="text-center mb-5">
          {" "}
          <h1 className="display-5 fw-bold">About iNotebook</h1>{" "}
          <p className="lead text-muted">
            {" "}
            A simple and secure way to create and manage your personal
            notes.{" "}
          </p>{" "}
        </div>{" "}
        {/* Description */}{" "}
        <div className="row justify-content-center">
          {" "}
          <div className="col-12 col-md-10 col-lg-8">
            {" "}
            <p className="text-center">
              {" "}
              iNotebook is a simple and secure note-taking web application built
              using the MERN stack. It allows users to create, update, delete,
              and manage their personal notes from anywhere. Each user's notes
              are protected using authentication, so users can access only their
              own notes..{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Features + Technologies */}{" "}
        <div className="row g-4 mt-3">
          {" "}
          {/* Features */}{" "}
          <div className="col-12 col-md-6">
            {" "}
            <div className="card h-100 shadow-sm">
              {" "}
              <div className="card-body">
                {" "}
                <h3 className="card-title mb-4">Features</h3>{" "}
                <ul className="list-group list-group-flush">
                  {" "}
                  <li className="list-group-item"> Create new notes </li>{" "}
                  <li className="list-group-item"> Edit existing notes </li>{" "}
                  <li className="list-group-item"> Delete notes </li>{" "}
                  <li className="list-group-item"> Manage personal notes </li>{" "}
                  <li className="list-group-item">
                    {" "}
                    Secure user authentication{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Technologies */}{" "}
          <div className="col-12 col-md-6">
            {" "}
            <div className="card h-100 shadow-sm">
              {" "}
              <div className="card-body">
                {" "}
                <h3 className="card-title mb-4">Technologies Used</h3>{" "}
                <ul className="list-group list-group-flush">
                  {" "}
                  <li className="list-group-item">
                    {" "}
                    <strong>React.js</strong> – Frontend{" "}
                  </li>{" "}
                  <li className="list-group-item">
                    {" "}
                    <strong>Node.js & Express.js</strong> – Backend{" "}
                  </li>{" "}
                  <li className="list-group-item">
                    {" "}
                    <strong>MongoDB</strong> – Database{" "}
                  </li>{" "}
                  <li className="list-group-item">
                    {" "}
                    <strong>JWT</strong> – Authentication{" "}
                  </li>{" "}
                  <li className="list-group-item">
                    {" "}
                    <strong>Bootstrap</strong> – UI{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer description */}{" "}
        <div className="row justify-content-center mt-5">
          {" "}
          <div className="col-12 col-md-10 col-lg-8">
            {" "}
            <div className="text-center">
              {" "}
              <h3>About the Project</h3>{" "}
              <p className="text-muted">
                {" "}
                iNotebook demonstrates how a full-stack web application works by
                connecting a React frontend with a Node.js and Express backend
                and a MongoDB database.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default About;
