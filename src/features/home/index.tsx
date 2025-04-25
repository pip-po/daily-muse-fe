import React from "react";
import Jumbotron from "./_components/Jumbotron";
import BlogList from "@/features/home/_components/BlogList";

const HomePage = () => {
  return (
    <main>
      <div className="container mx-auto">
        {" "}
        <Jumbotron />
        <BlogList />
      </div>
    </main>
  );
};

export default HomePage;
