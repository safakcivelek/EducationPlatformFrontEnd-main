import { StaticImageData } from 'next/image';
import React from 'react';
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue:string;
  setInputValue:React.Dispatch<React.SetStateAction<string>>;
  // filterType, setFilterType
  filterType:string;
  setFilterType:React.Dispatch<React.SetStateAction<string>>;
}
//home-categories type
export interface categoriesType{
  id:number;
  icon:()=> JSX.Element;
  title:string;
  description:string;
}

export interface coursesType{
  id:number;
  category:string;
  title:string;
  level?:string;
  description?:string;
  checkIcons?:any;
  img:StaticImageData;
  tutorImg:StaticImageData;
  ratings:number;
  ratingsNum?:number;
  price: number;
  oldPrice?:number;
  authorName:string;
  lessons?:string;
  categoryColor?:string;
  shapeImg?:StaticImageData;
  courseeDate?:string;
  courseCreadit?:string;
  clock?:string;
  Creadit?:string;
  network?:string;
  courseLinkColor?:string;
  ratingCount?:number;
  ratingAve?:number;
  quantity:number;
  videoUrl?:string;
  courseLesson?: StaticImageData;
}

//counter_data type
export interface counterType{
  id?:number;
  icon?:()=> JSX.Element;
  countNum?: number;
  countPlus?:string;
  description?:string;
}

//university_card_type
export interface universityCardType{
  id:number;
  cardIcon:()=> JSX.Element;
  title:string;
  description:string;
}

interface aduenceThumbType {
  id?: number;
  image: StaticImageData;
}

//home three events data
export interface eventType{
  id:number;
  eventDate:number;
  eventMonth:string;
  title:string;
  clock:string;
  palce:string;
  adanceInfo:string;
  aduenceThumb:aduenceThumbType[];
  btn:string;
}

export interface galleryType{
  id:number;
  image:StaticImageData;
  icon:string;
}

// product type
export interface productsType {
  id?: number;
  img?: StaticImageData;
  title: string;
  category?:string;
  level?:string;
  price: number;
  oldPrice?: number;
  rating: number;
  quantity:number;
}

//course-ratings-type
export interface courseRatingType {
  id?: number;
  ratingCount?: number;
  ratings:number;
  checkBoxId?:string;
  htmlForClass?:string;
}

//review-data-type
export interface reviewType {
  id?: number;
  image?: StaticImageData;
  title?:string;
  ratings?:number;
  duration?:string;
  description?:string;
}

//about feature type
export interface aboutFeatureType{
  id?:number;
  icon?:()=> JSX.Element;
  title?:string;
  description?:string;
}
//education Type
export interface educationType{
  id?:number;
  image?:StaticImageData;
  title?:string;
}
//team data Type
export interface teamType{
  id?:number;
  image?:StaticImageData;
  title?:string;
  info?:string;
  socialIcon?:any;
  ratingAve?:number;
  ratingCount?:number;
  memberCourse?:number;
}
//Zoom class data Type
export interface zoomClassType{
  id?:number;
  category?:string;
  img?:StaticImageData;
  title?:string;
  date?:string;
  time?:string;
  schedule?:string;
  meetingId?:string;
}
// id type
export interface idType {
  id?: number;
}

// brands type
export interface brandsType {
  id?: number;
  image?: StaticImageData;
}

// testimonial type
export interface testimonialType {
  id?: number;
  image?: StaticImageData;
  title?: string;
  subTitle?: string;
  infoCategory?:string;
  iconImg?:any;
  description?: string;
  rating?: number;
}

// blog type
export interface blogsType {
  id?: number;
  img?: StaticImageData;
  title?: string | undefined;
  description?: string;
  date?: string;
  user?: string;
  blogTag:string;
  desc?:string;
  btn?: string;
}
// faq type
export interface faqType {
  id?: number;
  questionText?: string;
  icon?:string;
}

// product type
export interface menusType {
  id?: number;
  hasDropdown?: boolean;
  title?: string | undefined;
  link?: any;
  submenus?: any;
}

// pricing plan

interface PricingListItemType {
  id: number;
  listInfo: string;
  icon?: string;
}

export interface PricingPlanItemType {
  id: number;
  title?: string;
  pricingList?: PricingListItemType[];
  price?: number | string;
  desc:string;
  btn:string;
  popularClassWrapper?:string;
  plan?:string;
}

// category type
export interface categoryFilterType {
  id:number;
  category: string;
}
export interface categoryLavelType {
  id:number;
  level: string;
}
// webinar type
export interface webinarType {
  id?:number;
  img?: StaticImageData;
  title?:string;
  badge?:string;
  date?:string;
  time?:string;
  desc?:string;
  btn?:string;
  videoUrl?:string;
}
// progress data type
export interface progressDataType {
  id:number;
  img: StaticImageData;
  title:string;
  ratings:number;
  ratingAve:number;
  lesson:number;
  lessonTwo:number;
  progrssNum:number;
}
// student review data type
export interface studentReviewType {
  id:number;
  title:string;
  ratings:number;
  comment:string;
}
// Order History data type
export interface OrderHistoryType {
  id:number;
  orderName:string;
  orderPrice:number;
  orderDuration:string;
  orderStatus:string;
  orderMethod:string;
  orderDate:string;
  btn:string;
}
export interface Course {
  id: number;
  title: string;
  category: string;
  // ... other properties
}
export interface ZoomClassType {
  id?: number;
  title?: string;
  category?: string;
  // ... other properties
}

//price filter
export interface PriceFilterType{
  id: number;
  price: string;
  priceAmount: number;
}


