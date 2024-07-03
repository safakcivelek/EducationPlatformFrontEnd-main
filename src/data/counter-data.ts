import {counterType } from "@/interFace/interFace"
import CounterIconOne from "@/svg/counter-icon-one";
import CounterIconTwo from "@/svg/counter-icon-two";
import CounterIconThere from "@/svg/counter-icon-there";
import CounterIconFour from "@/svg/counter-icon-four";
import CounterIconFive from "@/svg/counter-icon-five";
import CounterIconSix from "@/svg/counter-icon-six";
import CounterIconSeven from "@/svg/counter-icon-seven";
import CounterIconEight from "@/svg/counter-icon-eight";
import AboutCounterIcon from "@/svg/about-counter-icon";
import AboutCounterIconTwo from "@/svg/about-counter-icon-two";
import AboutCounterIconThree from "@/svg/about-counter-icon-three";
import AboutCounterIconFour from "@/svg/about-counter-icon-four";


    const counter_data:counterType[]=[
        {
            id:1,
            icon:CounterIconOne,
            countNum:68806,
            description:"Students Enrolled"
        },
        {
            id:2,
            icon:CounterIconTwo,
            countNum:5740,
            description:"Class Completed"
        },
        {
            id:3,
            icon:CounterIconThere,
            countNum: 470,
            countPlus:"+",
            description:"Skilled Instructors",
        },
        {
            id:4,
            icon:CounterIconFour,
            countNum:6548,
            description:"Premium Kurs"
        },
        //home three counter data
        {
            id:5,
            icon:CounterIconEight,
            countNum:68806,
            description:"Students Enrolled"
        },
        {
            id:6,
            icon:CounterIconFive,
            countNum:5740,
            description:"Class Completed"
        },
        {
            id:7,
            icon:CounterIconSix,
            countNum:470,
            countPlus:"+",
            description:"Skilled Instructors"
        },
        {
            id:8,
            icon:CounterIconSeven,
            countNum:65486,
            description:"Technical Courses"
        },
        //about-counter-data
        {
            id:9,
            icon:AboutCounterIcon,
            countNum:68806,
            description:"Students Enrolled"
        },
        {
            id:10,
            icon:AboutCounterIconTwo,
            countNum:5740,
            description:"Class Completed"
        },
        {
            id:11,
            icon:AboutCounterIconThree,
            countNum:470,
            countPlus:"+",
            description:"Premium Kurslar"
        },
        {
            id:12,
            icon:AboutCounterIconFour,
            countNum:6548,
            description:"Premium Kurslar"
        },
        //student profile data
        {
            id:13,
            icon:CounterIconOne,
            countNum:5,
            description:"Online Kurslar"
        },
        {
            id:14,
            icon:CounterIconTwo,
            countNum:3,
            description:"Active Courses"
        },
        {
            id:15,
            icon:CounterIconThere,
            countNum:1,
            description:"Completed Courses"
        },
    ]

export default counter_data;