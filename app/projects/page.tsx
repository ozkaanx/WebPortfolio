import ProjectsList from "@/components/Projects/list";
import Container from "@/components/Ui/Container";
import "./style.scss";

const Projects = () => {
  return (
    <Container
      maxWidth="600px"
      style={{
        marginTop: "70px",
      }}
    >
      <div className="project-wrapper">
        <span className="project-wrapper__title">Projects</span>
        <div className="project-wrapper__list">
          <ProjectsList />
        </div>
      </div>
    </Container>
  );
};

export default Projects;
