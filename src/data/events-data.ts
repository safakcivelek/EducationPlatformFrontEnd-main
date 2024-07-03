import { eventType } from "@/interFace/interFace";
import EventImageOne from "../../public/assets/img/event/event-01.png";
import EventImageTwo from "../../public/assets/img/event/event-02.png";
import EventImageThree from "../../public/assets/img/event/event-03.png";
import EventImageFour from "../../public/assets/img/event/event-04.png";
import EventImageFive from "../../public/assets/img/event/event-04.png";

const events_data: eventType[] = [
  {
    id: 1,
    eventDate: 10,
    eventMonth: "Jan 2023",
    title: "Education Autumn Tour Conference",
    clock: "10:30 AM",
    palce: "Zeoyan Stadium, London",
    aduenceThumb: [
      { id: 1, image: EventImageOne },
      { id: 2, image: EventImageTwo },
      { id: 3, image: EventImageThree },
      { id: 4, image: EventImageFour },
      { id: 5, image: EventImageFive },
    ],
    adanceInfo: "+55 Audience have joined",
    btn: "Get ticket",
  },
  {
    id: 2,
    eventDate: 18,
    eventMonth: "Mar 2023",
    title: "General ideas of Land Management System",
    clock: "10:30 AM",
    palce: "Zeoyan Stadium, London",
    aduenceThumb: [
      { id: 1, image: EventImageOne },
      { id: 2, image: EventImageTwo },
      { id: 3, image: EventImageThree },
      { id: 4, image: EventImageFour },
      { id: 5, image: EventImageFive },
    ],
    adanceInfo: "+80 Audience have joined",
    btn: "Get ticket",
  },
  {
    id: 3,
    eventDate: 21,
    eventMonth: "April 2023",
    title: "Discussion on Data Science PowerPoint",
    clock: "09:30 AM",
    palce: "Zeoyan Stadium, London",
    aduenceThumb: [
      { id: 1, image: EventImageOne },
      { id: 2, image: EventImageTwo },
      { id: 3, image: EventImageThree },
      { id: 4, image: EventImageFour },
      { id: 5, image: EventImageFive },
    ],
    adanceInfo: "+70 Audience have joined",
    btn: "Get ticket",
  },
  {
    id: 4,
    eventDate: 27,
    eventMonth: "April 2023",
    title: "Foundations of Global Health",
    clock: "12:30 AM",
    palce: "Zeoyan Stadium, London",
    aduenceThumb: [
      { id: 1, image: EventImageOne },
      { id: 2, image: EventImageTwo },
      { id: 3, image: EventImageThree },
      { id: 4, image: EventImageFour },
      { id: 5, image: EventImageFive },
    ],
    adanceInfo: "+75 Audience have joined",
    btn: "Get ticket",
  },
];

export default events_data;
