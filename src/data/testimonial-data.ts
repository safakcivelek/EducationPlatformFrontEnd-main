import AuthorImgOne from "../../public/assets/img/testimonial/Image.png"
import AuthorImgTwo from "../../public/assets/img/testimonial/testimonial-02.png";
import AuthorImgThere from "../../public/assets/img/testimonial/testimonial.png";
import QuotesImg from "../../public/assets/img/testimonial/quotes.png"
import { testimonialType } from "@/interFace/interFace";


const testimonial_data:testimonialType[] = [
  {
    id: 1,
    image: AuthorImgOne,
    subTitle: "Brandon Tylor",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Best Experience !",
    description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
    rating: 5,
  },
  {
    id: 2,
    image: AuthorImgTwo,
    subTitle: "Brandon Tylor",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Best Experience !",
    description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
    rating:4
  },
  {
    id: 3,
    image: AuthorImgThere,
    subTitle: "Richard Joseph",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Helpful Instructors !",
    description:"There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.",
    rating:5
  },
  {
    id: 4,
    image: AuthorImgTwo,
    subTitle: "Brandon Tylor",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Best Experience !",
    description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
    rating:4
  },
  //home three testimonial data
  {
    id: 5,
    image: AuthorImgOne,
    subTitle: "David Johnson",
    infoCategory:'Student',
    title:"Great Course !",
    description:"Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!",
    rating:5
  },
  {
    id: 6,
    image: AuthorImgTwo,
    subTitle: "Brandon Tylor",
    infoCategory:'Student',
    title:"Best Experience !",
    description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
    rating:5
  },
  {
    id: 7,
    image: AuthorImgThere,
    subTitle: "Richard Joseph",
    infoCategory:'Student',
    title:"Helpful Instructors !",
    description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
    rating:4
  },

]
export default testimonial_data;
