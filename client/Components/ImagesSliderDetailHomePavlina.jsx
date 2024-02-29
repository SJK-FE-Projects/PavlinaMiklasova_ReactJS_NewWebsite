import { useEffect, useState } from "react";
import DataSet from '../Assets/db.json';

import "../Styles/ImageCarouselProject.modules.scss";

const ImagesSliderDetailHomePavlina = () => {
  const [imageData, setImageData] = useState([]);
  const projectId = 0; // Fixed projectId
  const [project, setProject] = useState();

  useEffect(() => {
    try {
      // Find the project from the local dataset
      const selectedProject = DataSet.projects.find(item => item.id === parseInt(projectId));

      if (selectedProject) {
        // Extract images from the project
        const extractedData = selectedProject.images.map((item) => ({
          image: item.url,
        }));
        setProject(selectedProject);
        setImageData(extractedData);
      } else {
        console.error("Project not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="ImageCarousel">
      {project ? (project.images.map((image, index) => {
        return (
          <li key={index} className="ImageItem">
            <img src={image.url} alt="img not working" />
          </li>
        );
      })) : null}
    </div>
  );
};

export default ImagesSliderDetailHomePavlina;
