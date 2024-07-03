import { reviewType } from '@/interFace/interFace';
import authorImgOne from '../../public/assets/img/course/course-reviews-1.png';
import authorImgTwo from '../../public/assets/img/course/course-reviews-2.png';
import authorImgThree from '../../public/assets/img/course/course-reviews-3.png';

const review_data:reviewType[]= [
    {
        id:1,
        image:authorImgOne,
        title: "Sotapdi Kunda",
        ratings:5,
        duration: "55 min ago",
        description: "Very clean and organized with easy to follow tutorials, Exercises, and solutions.This course does start from the beginning with very little knowledge and gives a great overview of common tools used for data science and progresses into more complex concepts and ideas.",
    },
    {
        id:2,
        image:authorImgTwo,
        title: "Samantha",
        ratings:4,
        duration: "45 min ago",
        description: "The course is good at explaining very basic intuition of the concepts. It will get you scratching the surface so to say. where this course is unique is the implementation methods are so well defined Thank you to the team !.",
    },
    {
        id:3,
        image:authorImgThree,
        title: "Michell Mariya",
        ratings:5,
        duration: "30 min ago",
        description: "This course is amazing..! I started this course as a beginner and learnt a lot. Instructors are great. Query handling can be improved.Overall very happy with the course.",
    },
]

export default review_data