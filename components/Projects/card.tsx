import React from "react";
import moment from "moment";
import "./style.scss";

type CardProps = {
  data: {
    name: string;
    description: string;
    created_at: string;
  };
};

const ProjectCard = ({
  data: { name, description, created_at },
}: CardProps) => {
  return (
    <div className="project-card">
      <span className="project-card--item__title">{name}</span>
      <span className="project-card--item__description">{description}</span>
      <div className="project-card--item__date">
        <span>{moment(created_at).format("DD/MM/YYYY")}</span>
        <span>{moment(created_at).fromNow()}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
