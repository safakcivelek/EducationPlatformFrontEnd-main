
import { teamType } from "@/interFace/interFace";
import teamImg1 from "../../public/assets/img/member/member-img-01.png";
import teamImg2 from "../../public/assets/img/member/member-img-02.png";
import teamImg3 from "../../public/assets/img/member/member-img-03.png";
import teamImg4 from "../../public/assets/img/member/member-img-04.png";
import teamImg5 from "../../public/assets/img/member/member-img-05.png";
import teamImg6 from "../../public/assets/img/member/member-img-06.png";
import teamImg7 from "../../public/assets/img/member/member-img-07.png";
import teamImg8 from "../../public/assets/img/member/member-img-08.png";
import teamImg9 from "../../public/assets/img/member/member-img-09.png";
import teamImg10 from "../../public/assets/img/member/member-img-10.png";
import teamImg11 from "../../public/assets/img/member/member-img-11.png";
import teamImg12 from "../../public/assets/img/member/member-img-12.png";
import membarImage from "../../public/assets/img/member/member-img-01.png";
import membarImageTwo from "../../public/assets/img/member/member-img-02.png";


const team_data:teamType[] = [
  {
    id: 1,
    image: teamImg1,
    title: "Engin Demiroğ",
    info:"Data Scientist, Codexpand",
    socialIcon:[
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:2, icon:"fab fa-github", socialLink:"https://github.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    
  },
  
];

export default team_data;
