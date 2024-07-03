import { educationType } from '@/interFace/interFace';
import educationImg from '../../public/assets/img/gallery/gallary-06.jpg'
import educationImgTwo from '../../public/assets/img/gallery/gallary-07.jpg';
import educationImgThree from '../../public/assets/img/gallery/gallary-08.jpg';

const education_data:educationType[] = [
    {
        id: 1,
        image: educationImg,
        title:'Our mission vision',
      },
      {
        id: 2,
        image: educationImgTwo,
        title:'How we research',
      },
      {
        id: 3,
        image: educationImgThree,
        title:'Why we are trusted',
      },
      
]

export default education_data;