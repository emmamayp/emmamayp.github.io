import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import WorkIcon from "@mui/icons-material/Work";
  
const Experience = () => {
    return (
    <div className="experience">
      <VerticalTimeline lineColor="#393444">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2023"
          iconStyle={{ background: "#D0BCD5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kognitiv
          </h4>
          <p> In the last 3 years, I have been building a management portal which is a way to make changes to all our websites on a centralised system.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#D0BCD5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Developer
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Venue Directory
          </h4>

          <p>During my time at Venue Directory, I had the opportunity to upgrade the legacy platform to use modern technologies such as MVC & Vue.js</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "#D0BCD5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Database Administrator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            RNLI
          </h4>
          <p>One of the highlights of this role involved creating the RNLI’s database emergency backup plan documentation. 
            During this time, I completed two 5-day courses gaining experience using Azure and SQL server.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: "#D0BCD5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Digital Trip
          </h4>
          <p>
            I started my career in the travel technology industry, where I advanced my skills and learned best practices.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    )
}
export default Experience;