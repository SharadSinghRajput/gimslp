import Image from "next/image";
import ImageLink from "./img/main.webp";
import aicte from "./img/mous-coll/aicte.png";
import albpm from "./img/mous-coll/albpm.png";
import iimbx from "./img/mous-coll/iimbx.jpg";
import aims from "./img/mous-coll/aims.jpg";
import analytics from "./img/mous-coll/analytics.png";
import atal from "./img/mous-coll/atal.png";
import indraGandhi from "./img/mous-coll/indra-gandhi.png";
import msme from "./img/mous-coll/msme.png";
import nhrd from "./img/mous-coll/nhrd.png";
import iacm from "./img/mous-coll/iacm.jpg";
import unmas from "./img/mous-coll/unmas.png";
import xlri from "./img/mous-coll/xlri.jpg";
import Shivani from "./img/shivani-sharma-singh.webp";
import Amisha from "./img/amisha-goyal.jpg";
import gimsLogo from "./img/gims-logo.png";
import asahiIndiaGlass from "./img/asahi-india-glass.jpg";
import pgdmBG from "./img/pgdmBG.jpg";
import pgdmBG2 from "./img/BG2.jpg";
import Section1 from "./img/img1.jpg";

import aicte1 from "./img/aicte.png";
import aims2 from "./img/aims.jpg";
import albpm3 from "./img/albpm.png";
import analytics4 from "./img/analytics.png";
import atal5 from "./img/atal.png";
import iacm6 from "./img/iacm.jpg";
import iimbx7 from "./img/iimbx.jpg";
import indraGandhi8 from "./img/indra-gandhi.png";
import msme9 from "./img/msme.png";
import nhrd10 from "./img/nhrd.png";
import tpcra11 from "./img/tpcra.png";
import unmas12 from "./img/unmas.png";
import qualityAssured13 from "./img/quality-assured.png";
import coursera14 from "./img/coursera.png";
import iba15 from "./img/iba.png";
import xlri16 from "./img/xlri.jpg";
import NoPaperFormsWidget from "./NPF"

import collaboration1 from "./img/international-collaborations/international-collaborations-1.png";
import collaboration2 from "./img/international-collaborations/international-collaborations-2.png";
import collaboration3 from "./img/international-collaborations/international-collaborations-3.png";
import collaboration4 from "./img/international-collaborations/international-collaborations-4.png";
import collaboration5 from "./img/international-collaborations/international-collaborations-5.png";
import collaboration6 from "./img/international-collaborations/international-collaborations-6.png";
import collaboration7 from "./img/international-collaborations/international-collaborations-7.png";
import collaboration8 from "./img/international-collaborations/international-collaborations-8.png";
import collaboration9 from "./img/international-collaborations/international-collaborations-9.png";
import collaboration10 from "./img/international-collaborations/international-collaborations-10.png";

const internationalCollaborations = [
  collaboration1,
  collaboration2,
  collaboration3,
  collaboration4,
  collaboration5,
  collaboration6,
  collaboration7,
  collaboration8,
  collaboration9,
  collaboration10,
];




import {awardsData, newsData, CorporateMentors, PlacementData, testimonials, HighlightsData} from "./json"



const imageLinks = [
  aicte, albpm, iimbx, aims, analytics, atal, indraGandhi, msme, nhrd, iacm, unmas, xlri,
];

const importedImages = [
  aicte1, aims2, albpm3, analytics4, atal5, iacm6, iimbx7, indraGandhi8, msme9, nhrd10, tpcra11, unmas12, qualityAssured13, coursera14, iba15, xlri16,
];




export default function Home() {
  
  return (
    <div className="pb-[400px]">
    <header className="bg-white shadow-xl">
            <div className="max-w-7xl w-full mx-auto py-2">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <img src={gimsLogo.src} alt="" className="h-12" />
                </div>
                <div className="col-span-6 flex justify-end">
                    <p className="flex gap-2"> 
                        <a className="w-max bg-white shadow-lg py-1 h-9 px-4 text-sm text-sm flex justify-center border border-red-400 rounded-full items-center gap-2" href="tel:18002746969"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 18002746969 </a>
                        <a className="w-max bg-white shadow-lg py-1 h-9 px-4 text-sm text-sm flex justify-center border border-red-400 rounded-full items-center gap-2" href="mailto:admission@gniot.net.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> admission@gniot.net.in </a>
                    </p>
                </div>
            </div>
            </div>
        </header>
        <section className="">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
                <div className="grid grid-cols-12 w-full">
                    <div className="col-span-8 w-full p-16 flex justify-start items-end bg-cover bg-center" style={{ backgroundImage: `url(${ImageLink.src})` }} >
                        <p className="font-bold text-6xl text-white">THINK PGDM THINK GIMS</p>
                    </div>
                    <div className="col-span-4 p-5 w-full bg-white object-center object-cover">
                            <div className="forminputdiv" id="form">
                            <NoPaperFormsWidget />
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="my-10">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
              <div className="grid grid-cols-5 w-full gap-2">
                {HighlightsData?.map((item, index) => (
                  <div
                    key={item.id}
                    className={` ${item.colSpan ? `col-span-${item.colSpan}` : ''}
                    flex justify-start 
                    `}
                  >
                    <span className="text-6xl font-black relative z-10 block text-orange-400">{index+1}</span>
                    <p className="p-2 pl-8 -ml-5 w-full rounded-l-lg bg-gradient-to-r from-orange-100 to-white" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                  </div>
                ))}
              </div>
            </div>
        </section>
        <section className="">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="mb-4">
                      <span className="text-sm text-yellow-600">Recognized Partners</span>
                      <h2 className="text-2xl font-bold">Affiliations, Accreditations & Collaborations</h2>
                  </div>
                  <ul className="grid grid-cols-6 gap-2 ">
                    {importedImages.map((image, index) => (
                      <li key={index} className="bg-white flex justify-center pb-4 border-b border-gray-200">
                        <img src={image.src} alt={`Image ${index + 1}`} className="w-16 h-16 bg-white object-contain" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-sm text-yellow-600">Collaborations​</span>
                    <h2 className="text-2xl font-bold">International Collaborations​</h2>
                  </div>
                  <ul className="grid grid-cols-6 gap-2 ">
                    {/* {importedImages.map((image, index) => ( */}
                    {internationalCollaborations.map((image, index) => (
                      <li key={index} className="bg-white flex justify-center pb-4 border-b border-gray-200">
                        <img src={image.src} alt={`Image ${index + 1}`} className="w-16 h-16 bg-white object-contain" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </section>
        <section className="bg-contain bg-no-repeat bg-left" style={{ backgroundImage: `url(${pgdmBG2.src})` }}>
            <div className="max-w-7xl w-full mx-auto py-2">
              <div className="grid grid-cols-12 gap-5">

                <div className="col-span-4"/>
                <div className="col-span-8">
                  <div className="mb-4">
                      <span className="text-sm text-yellow-600">Rankings</span>
                      <h2 className="text-2xl font-bold">Awards and Rankings</h2>
                  </div>
                  <ul className="grid grid-cols-4 gap-4">
                    {awardsData.map((award, index) => (
                      <li key={index} className="text-sm bg-white p-4 border-b border-b-orange-100 pb-4">
                        <span className="block text-orange-400 text-xs"><em>{award.organization}</em></span>
                        <span className="block mt-2">{award.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </section>
        <section className="bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${pgdmBG.src})` }}>
            <div className="max-w-7xl w-full mx-auto py-2">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-8">
                  <div>
                    <div className="mb-4 pt-24">
                        <span className="text-sm text-yellow-600">Rankings</span>
                        <h2 className="text-2xl font-bold">Awards and Rankings</h2>
                    </div>
                    <ul className="grid grid-cols-2 gap-4">
                      {newsData.map((item, index) => (
                        <li key={index} className="bg-white p-4 border-b border-b-gray-200">
                          <span className="text-sm font-bold block text-orange-500">{item.title}</span>
                          <span className="text-sm">{item.description}</span> 
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
              <div className="grid grid-cols-12">
                <div className="col-span-8 bg-gray-200 p-10">
                  <div className="mb-4">
                      <span className="text-sm text-yellow-600">Rankings</span>
                      <h2 className="text-2xl font-bold">Admission Process</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-1 bg-white flex flex-col justify-between">
                      <ul className="p-10">
                        <li className="text-sm text-gray-700 list-disc">Applying to the institute</li>
                        <li className="text-sm text-gray-700 list-disc">Screening the application​</li>
                      </ul>
                      <p className="bg-green-500 font-black uppercase text-center text-white px-2 py-4 text-sm">Application Screening</p>
                    </div>
                    <div className="col-span-1 bg-white flex flex-col justify-between">
                      <ul className="p-10">
                        <li className="text-sm text-gray-700 list-disc">CET</li>
                        <li className="text-sm text-gray-700 list-disc">Group Discussion</li>
                        <li className="text-sm text-gray-700 list-disc">PI</li>
                      </ul>
                      <p className="bg-yellow-500 font-black uppercase text-center text-white px-2 py-4 text-sm">Testing​</p>
                    </div>
                    <div className="col-span-1 bg-white flex flex-col justify-between">
                      <ul className="p-10">
                        <li className="text-sm text-gray-700 list-disc">Based on the performance in CET/GD/PI</li>
                      </ul>
                      <p className="bg-gray-500 font-black uppercase text-center text-white px-2 py-4 text-sm">Selection/ Rejection​</p>
                    </div>
                    <div className="col-span-3">
                      <div className="mb-4">
                      <p className="font-extrabold text-xl">Process 1</p>
                        <div className="w-full grid grid-cols-3" >
                          <span className="h-10 bg-green-500 text-white uppercase font-bold flex justify-center items-center">Application Screening</span>
                          <span className="h-10 bg-yellow-500 text-white uppercase font-bold flex justify-center items-center">Testing​</span>
                          <span className="h-10 bg-gray-500 text-white uppercase font-bold flex justify-center items-center">Selection/ Rejection​</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-extrabold text-xl">Process 2</p>
                        <div className="w-full grid grid-cols-2" >
                          <span className="h-10 bg-green-500 text-white uppercase font-bold flex justify-center items-center">Application Screening</span>
                          <span className="h-10 bg-gray-500 text-white uppercase font-bold flex justify-center items-center">Selection/ Rejection​</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={Section1.src} alt={`Image`} className="col-span-4 h-full bg-white object-contain" />
                
              </div>
            </div>
        </section>
        <section className="">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <div className="mb-4 ">
                      <span className="text-sm text-yellow-600">Mentors</span>
                      <h2 className="text-2xl font-bold">Corporate Mentors</h2>
                  </div>
                  <div className="grid grid-cols-8 gap-4">
                    {CorporateMentors?.map((item, index)=>(
                    <div key={index}>
                      <img src={Shivani.src} alt={`Image ${index + 1}`} className="w-24 h-24 bg-white object-cover rounded-full rounded-bl-2xl" />
                      <div>
                        <p className="text-sm font-bold mb-2">{item.name}</p>
                        <p className="text-xs">{item.position}</p>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
              <div className="grid grid-cols-12 gap-5">
                <div className="mb-4 bg-cyan-500 col-span-4 p-5">
                    <span className="text-sm text-white">Placements​</span>
                    <h2 className="text-2xl font-bold text-white">Excellent Placement Record</h2>
                    <h2 className="text-4xl font-black uppercase text-white grid gap-0 grid-cols-1">
                      <span className="leading-none">Package</span>
                      <span className="leading-none text-yellow-100">Snippets</span>
                      <span className="leading-none text-yellow-100">Highlights</span>  
                    </h2>
                    <div className="grid grid-cols-2 py-4">
                      <p className="text-sm text-white p-3 border-b border-dashed border-b-white">Highest Package (International): 
                          <span className="text-2xl font-bold block text-white">23.31 LPA</span>
                        </p>
                      <p className="text-sm text-white p-3 border-l border-b border-dashed border-b-white">Highest Package (Domestic): 
                          <span className="text-2xl font-bold block text-white">12.5 LPA</span>
                        </p>
                      <p className="text-sm text-white p-3 ">Average Package: 
                          <span className="text-2xl font-bold block text-white">7.25 LPA</span>
                        </p>
                      <p className="text-sm text-white p-3 border-l border-dashed border-b-white">Average offers received per student: 
                          <span className="text-2xl font-bold block text-white">3 offers</span>
                        </p>
                    </div>
                    <div>
                      <p className="text-3xl mb-4 uppercase p-2 bg-white font-black text-cyan-500">Summer Internship</p>
                      <p className="text-xl text-white">Highest Stipend: <span className="font-black">30K</span></p>
                      <p className="text-xl text-white">Average Stipend: <span className="font-black">14K</span></p>
                    </div>

                </div>
                <div className="grid grid-cols-5 col-span-8">
                  {PlacementData.map((item, index)=>(
                    <div className="flex flex-col justify-start items-center" key={index}>
                      <img src={Amisha.src} alt={`Image ${index + 1}`} className="w-32 h-36 bg-white object-cover" />
                      <p className="font-base border-b border-t py-2 mt-2 border-b-gray-200">{item.name}</p>
                      <img src={asahiIndiaGlass.src} alt={`Image ${index + 1}`} className="w-16 h-14 bg-white block mx-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>
        <section className="">
            <div className="max-w-7xl w-full mx-auto py-2 bg-white">
              <div className="grid grid-cols-12 gap-5">
                <div className="grid grid-cols-4 col-span-12 gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div>
                      <div className="flex gap-5 border-b border-b-gray-100 pb-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 p-1 bg-white border-cyan-500">
                          <img src={testimonial.imageUrl} alt={testimonial.name} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800 font-normal">{testimonial.name}</p>
                          <p className="text-xs text-gray-800 font-normal">{testimonial.email}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4"></p>
                    <p className="text-gray-700 text-sm text-justify mb-4">{testimonial.testimonial}</p>
                    <p className="text-sm text-gray-400">{testimonial.date}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
        </section>
    </div>
  );
}
