import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import usePageTitle from "./hooks/usePageTitle";

function Experience() {
  usePageTitle("Experience | Terence");
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1998 - 2002"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            AMA University - Main Campus
          </h3>
          <p>Bachelor of Science in Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Career break (Continuing education)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cainta, Rizal</h4>
          <p>
            Made a strategic shift into the IT industry, and completed intensive
            Full Stack Web Development training with Kodego. Currently pursuing
            additional certifications online to stay updated with industry
            advancements and expanding skill set.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Business Project</h3>
          <h4 className="vertical-timeline-element-subtitle">Manila</h4>
          <p>
            Design and develop responsive websites using relevant technologies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2023 - November 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            iSupport Worldwide
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Ortigas, Pasig</h4>
          <p>
            Successfully increase customer sales and retention and meet goals,
            Gather intel on existing and prospective customers, maintain and
            update existing customer database, lead and prospect lists, evaluate
            retailer needs and provide suitable product recommendations.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
