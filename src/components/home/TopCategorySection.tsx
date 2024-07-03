"use client"
import { GetAllCategoryResponse } from '@/models/response/Category/getAllCategoryResponse';
import CategoryService from '@/services/categoryService';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type Props={};
const TopCategorySection = () => {
  const [categories, setCategories] = useState<GetAllCategoryResponse>(); // Kategorileri saklamak için state
  const [loading, setLoading] = useState(true); // Verilerin yüklenip yüklenmediğini takip etmek için state

  const category: CategoryService = new CategoryService();
  useEffect(() => {
   category.getAll().then((response) => {
     setCategories(response.data);
     setLoading(false);
   });
  }, []);


  return (
    <>
      <div className="top-catagory-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-12 col-sm justify-content-center mb-30">
              <div className="section-title mb-20 text-center">
                <h2>En Popüler  <span className="down-mark-line">Kategoriler</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <p>Veriler yükleniyor...</p>) : (
              categories?.items.slice(0, 9).map((item) => (              
                <div key={String(item.id)} className="col-xl-4 col-lg-6 col-md-6">
                      <Link href={`/category-sections/${item.id}`}>
                    <div className="catagory-wrapper mb-30">
                       < img src={item.imageUrl} />&nbsp;&nbsp;
                      <div className="catagory-content">
                        <h3>{item.name}</h3>
                        
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

 export default TopCategorySection;


