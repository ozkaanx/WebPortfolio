"use client";

import useGetUser from "@/hooks/useGetUser";
import React from "react";
import ProjectCard from "./card";
import Button from "../Ui/Button";

const ProjectsList = () => {
  const { user, isLoading } = useGetUser();
  const [page, setPage] = React.useState(5);

  const handleNextPage = () => {
    setPage((prev) => prev + 5);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 5);
  };

  return (
    <div className="project-wrapper__list--item">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        Array.isArray(user) &&
        user?.slice(page - 5, page)?.map((project: any, index) => {
          return (
            <React.Fragment key={index}>
              <ProjectCard data={project} />
            </React.Fragment>
          );
        })
      )}

      {isLoading ? null : (
        <div className="project-wrapper__list--item__buttons">
          <Button
            disabled={isLoading || !Array.isArray(user) || page === 5}
            onClick={handlePrevPage}
            variant="prev"
          >
            Prev
          </Button>
          <Button
            disabled={isLoading || !Array.isArray(user) || user.length < page}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
