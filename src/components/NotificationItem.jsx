import React from "react";

const NotificationItem = ({ data }) => {
  console.log(data);
  return (
    <div className="notifications">
      {data.map((data) => (
        <>
          <div
            className={`${!data.isSeen ? "card-blue" : ""} notification-item`}
            key={data.id}
          >
            <img src={data.imgLink} alt="image" className="who-img" />

            <div>
              <div className="details | bold">
                <span className="who-guy | bold">{data.who} &nbsp;</span>
                <span className="gray">{data.details} </span>
                <span
                  className={`${
                    data.eventTo === "Chess Club" ? "club" : "dark-gray"
                  } | bold`}
                >
                  &nbsp;
                  <span className="event | bold">{data.eventTo}</span>
                  {!data.isSeen && <span className="redDot"></span>}
                </span>
              </div>
              <p className="day | gray">{data.eventDate}</p>
            </div>

            {data.picUrl && (
              <img src={data.picUrl} alt="image" className="side-img" />
            )}
          </div>
          {data.chat && <p className="chat-card | gray">{data.chat}</p>}
        </>
      ))}
    </div>
  );
};

export default NotificationItem;
