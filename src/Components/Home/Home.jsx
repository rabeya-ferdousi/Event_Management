import React from 'react';

import { Link, NavLink, useLoaderData } from 'react-router-dom';

import ServicesCard from '../Services/ServicesCard';
import LatestEvents from '../LatestEvents/LatestEvents';


const Home = () => {
  const events = useLoaderData();
    return (
     <div>
         <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-1/2 rounded-lg shadow-2xl" />
       <div>
          <h1 className="text-5xl mx-5 font-bold" style ={{"font-family": 'Norican'}}>Let's Celebrate!</h1>
          <p className="mx-5 py-6 font-semibold text-xl">Let's plan your next event.Here your every details matter.Our team of experts brings creativity and precision to every event.We handle the details so you can focus on creating memories. </p>
        <Link to="/"><button className="mx-5 btn bg-[#14b8a6] text-[white]">Get Started</button></Link>
    </div>
  </div>
</div>
      {/* About */}
          <div className='h-[500px]'>
            <div className="max-w-6xl max-auto">
              <div className="relative z-19 pb-8 bg-white sm : pb-16 md:pb-20 lg:max-w-2xl lg:max-w-full lg:pb-28">
                <h2 className='my-6 text-3xl mx-[200px] mt-7 font-extrabold sm:text-5xl'>
                  About Us
                </h2>
                <p className='mt-20 mx-16 text-xl font-medium'>
                We are more than just event planners; we create <br></br> memories. We engage in producing remarkable <br></br>moments that stay in your heart and memory, with a <br></br> passion for perfection and a permanent commitment <br></br>to quality.We are more than just event planners.<br></br> we are storytellers who create narratives that will be <br></br>remembered for a lifetime. Allow us to be a part of<br></br> your memorable moments and convert them into <br></br>lasting memories.
                </p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 p-8 mt-[700px]">
              <a className="h-56 w-full "  href="https://ibb.co/d5DZcRJ"><img src="https://i.ibb.co/x76ZsN8/pexels-asad-photo-maldives-169198.jpg" alt="pexels-asad-photo-maldives-169198" border="0"/></a>
            </div>
          </div>
          <div>
          <div className="container">
                    <div className="flex flex-wrap mx-3">
                        <div className="w-full px-4">
                            <h1 className='font-bold text-4xl text-[#14b8a6] mb-2 text-center mt-7'>Our Services</h1>
                            <p className='font-semibold text-2xl text-center sm:text-xl'>What we offer</p>
                        </div>
                    </div>
                </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
                {
                    events?.map(event=><ServicesCard key={event.id} event={event}></ServicesCard>)
                }
            </div>
          </div>
            <div>
            </div>
            <LatestEvents></LatestEvents>

           <footer className="footer footer-center p-10  text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact us</a> 
          <a className="link link-hover">Services</a> 
          <Link to="/gallery"><a className="link link-hover">Gallery</a></Link>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2023 - All right reserved by Let'sCelebrate Event Management Company Ltd</p>
        </aside>
        </footer>   
       </div>
    );
};

export default Home;