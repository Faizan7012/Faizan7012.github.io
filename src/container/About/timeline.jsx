import React from "react";
import "./timeline.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";

export const Timeline = () => {
  const [linecolor, setlinecolor] = React.useState('#202A44')
  return (
      <div className="about section mainsection" id="about">
        <h2 className="section__title" >
          My <span className="different">About</span>
        </h2>
        

        <VerticalTimeline lineColor={linecolor} class = 'about section'>
          <VerticalTimelineElement
            date={"May 2022 - Feb 2023"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              
            >
              Masai School (Remote)
            </h4>
            <p >
              Learning Full Stack Web Development to<br />build the career in tech
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"June 2019 - June 2020"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              
            >
             
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              
            >
                Higher Secondary School Certificate - Science
            </h4>
            <p >
               Usman Janta Inter College<br />Amroha, Uttar Pradesh
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"April 2018 - June 2019"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              
            >
                Highschool Metric
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              
            >
            </h4>
            <p >
              S.Q Higher College<br />Amroha, Uttar Pradesh
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
  );
};