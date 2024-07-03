import { blogsType } from "@/interFace/interFace"
import thumb1 from "../../public/assets/img/blog/blog-01.jpg"
import thumb2 from "../../public/assets/img/blog/blog-02.jpg"
import thumb3 from "../../public/assets/img/blog/blog-03.jpg";
import thumb4 from "../../public/assets/img/blog/blog-04.jpg";
import thumb5 from "../../public/assets/img/blog/blog-05.jpg";
import thumb6 from "../../public/assets/img/blog/blog-06.jpg";



const blogs_data:blogsType[] = [
    {
        id: 1,
        title: "Ask the Expert: Typography Talk with Brian Hoff",
        img: thumb1,
        blogTag:'Development',
        date: "20 Jan 2023",
        user: "Brian Hoff",
        btn: "Read More",
      },
      {
        id: 2,
        title: "Stop Redesigning And Start Your Tuning Your Site Instead",
        img: thumb2,
        blogTag:'Business',
        date: "13 Jan 2023",
        user: "Mark Hanry",
        btn: "Read More",
      },
      {
        id: 3,
        title: "How To Teach Web Design to the New Students",
        img: thumb3,
        blogTag:'Web Design',
        date: "23 Dec 2023",
        user: "Eduman",
        btn: "Read More",
      },
      //home three blogs data
      {
        id: 4,
        title: "Ask the Expert: Typography Talk with Brian Hoff",
        img: thumb1,
        blogTag:'Development',
        date: "23 Jan 2023",
        user: "Brian Hoff",
        btn: "Read More",
      },
      {
        id: 5,
        title: "Stop Redesigning And Start Your Tuning Your Site Instead",
        img: thumb2,
        blogTag:'Business',
        date: "15 Feb 2023",
        user: "Mark Hanry",
        btn: "Read More",
      },
      {
        id: 6,
        title: "How To Teach Web Design to the New Students",
        img: thumb3,
        blogTag:'Web Design',
        date: "18 Jan 2023",
        user: "Eduman",
        btn: "Read More",
      },
      //blog inner page data
      {
        id:7,
        img:thumb1,
        blogTag:'Development',
        title:'Ask the Expert: Typography Talk with Brian Hoff',
        date:'23 Jan 2022',
        desc:'There are so many websites out there that have not considered the overall usability of their visually impaired users.When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your websites experience while accessibility in mind. The participants ...',
        user:'Brian Hoff',
        btn:'Read more',
    },
    {
        id:8,
        img:thumb2,
        blogTag:'Business',
        title:'Stop Redesigning And Start Your Tuning Your Site Instead',
        date:'20 Jan 2022',
        desc:'Entrepreneurs and go-getters often feel as if they carry the weight of an entire organization on their backs, and therefore could always use a little extra motivation. Everyone must work, but for many of us that job is not just a paycheck, it is an opportunity to express ourselves and make ...',
        user:'Mark Hanry',
        btn:'Read more',
    },
    {
        id:9,
        img:thumb3,
        blogTag:'Web Design',
        title:'How To Teach Web Design to the New Students',
        date:'18 Jan 2022',
        desc:'There are so many websites out there that have not considered the overall usability of their visually impaired users.When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your websites experience while accessibility in mind. The participants ...',
        user:'Eduman',
        btn:'Read more',
    },
    //sidebar blog data
    {
      id:10,
      img:thumb4,
      blogTag:'Development',
      title:'The Importance Intrinsic Motivation.',
      date:'28 Jan 2022',
      desc:'here are so many websites out there that have not considered the overall usability of their visually impaired users.When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your websites experience while accessibility in mind. The participants ...',
      user:'Brian Hoff',
      btn:'Read more',
  },
  {
      id:11,
      img:thumb5,
      blogTag:'Development',
      title:'A Better Alternative To Grading Student.',
      date:'17 Jan 2022',
      desc:'here are so many websites out there that have not considered the overall usability of their visually impaired users.When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your websites experience while accessibility in mind. The participants ...',
      user:'Brian Hoff',
      btn:'Read more',
  },
  {
      id:12,
      img:thumb6,
      blogTag:'Development',
      title:'Strategic Social Media and Evolution of Visual',
      date:'19 Jan 2022',
      desc:'here are so many websites out there that have not considered the overall usability of their visually impaired users.When it comes to designing better links and sending better emails, Slava Shestopalov has a few tips on how to improve your websites experience while accessibility in mind. The participants ...',
      user:'Brian Hoff',
      btn:'Read more',
  }
      
]

export default blogs_data;