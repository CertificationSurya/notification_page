import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

import {
  mark,
  chess,
  anna,
  angela,
  jacob,
  kimberly,
  nathan,
  rizky,
} from "../assets/images/imageTransfer";

const Notifications = () => {
  const dataSource = [
    [
      false,
      mark,
      "Mark Webber",
      "reacted to your recent post",
      "My first tournament today!",
      false,
      false,
      null,
      false,
      null,
      "1m ago",
    ],

    [
      false,
      angela,
      "Angela Gray",
      "followed you",
      "",
      true,
      false,
      null,
      false,
      null,
      "5m ago",
    ],

    [
      false,
      jacob,
      "Jacob Thompson",
      "has joined your group",
      "Chess Club",
      false,
      false,
      null,
      false,
      null,
      "1 day ago",
    ],

    [
      true,
      rizky,
      "Rizky Hasanuddin",
      "sent you a private message",
      "",
      true,
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      null,
      false,
      null,
      "5 day ago",
    ],

    [
      true,
      kimberly,
      "Kimberly Smith",
      "commented on your picture",
      "",
      false,
      false,
      null,
      true,
      chess,
      "1 week ago",
    ],

    [
      true,
      nathan,
      "Nathan Peterson",
      "reacted to your recent post",
      "5 end-game strategies to increase win rate",
      false,
      false,
      null,
      false,
      null,
      "2 weeks ago",
    ],

    [
      true,
      anna,
      "Anna Kim",
      "left the group",
      "Chess Club",
      false,
      false,
      null,
      false,
      null,
      "2 weeks ago",
    ],
  ];


  const dataCreation = (dataSource) => {
    const formattedData = [];

    dataSource.map((data) => {
      const dataFragment = {
        id: crypto.randomUUID(),
        isSeen: data[0],
        imgLink: data[1],
        who: data[2],
        details: data[3],
        eventTo: data[4],
        personalToYou: data[5],
        chat: data[6],
        chatDetails: data[7],
        picComment: data[8],
        picUrl: data[9],
        eventDate: data[10],
      };

      formattedData.push(dataFragment);
    });
    return formattedData;
  };

  const dataTransport = dataCreation(dataSource);

  const [data, setData] = useState(dataTransport);

  return (
    <>
      <NotificationItem data={data} />
    </>
  );
};

export default Notifications;
