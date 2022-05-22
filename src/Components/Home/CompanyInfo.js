import React from 'react';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
import SubHeading from '../Shared/SectionHeading/SubHeading';

const CompanyInfo = () => {
 return (
  <div className='grid justify-center bg-accent py-10'>
   <SubHeading>Overview</SubHeading>
   <SectionHeading>our business summary </SectionHeading>
   <div class="stats shadow stat w-full">

    <div class="">
     <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
     </div>
     <div class="stat-title">Product Category</div>
     <div class="stat-value text-primary">25+</div>
     <div class="stat-desc">Export last month</div>
    </div>

    <div class="stat">
     <div class="stat-figure text-Primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
     </div>
     <div class="stat-title">Industry</div>
     <div class="stat-value text-neutral">20+</div>
     <div class="stat-desc"> World Wide </div>
    </div>

    <div class="stat">
     <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
     </div>
     <div class="stat-title">Customers</div>
     <div class="stat-value text-primary">120M+</div>
     <div class="stat-desc"> World Wide </div>
    </div>

    <div class="stat">
     <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
     </div>
     <div class="stat-title">Distributors</div>
     <div class="stat-value text-neutral">200K+</div>
     <div class="stat-desc"> World Wide </div>
    </div>

    <div class="stat">
     <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
     </div>
     <div class="stat-title"> Annual revenue</div>
     <div class="stat-value text-neutral">$ 10B+</div>
     <div class="stat-desc"> World Wide </div>
    </div>



   </div>
  </div>
 );
};

export default CompanyInfo;