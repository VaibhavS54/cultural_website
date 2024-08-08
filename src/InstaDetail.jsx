import React from 'react';
import { useState, useEffect } from 'react';

const InstaDetail = ({ account }) => {


  const [apidata, setApidata] = useState(null);

  const api = async () => {
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${account}&url_embed_safe=true`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'eda55a8d57msh67a4c48941b50bdp19027ajsnbdd5b8d4fe88',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      console.log(result);
      setApidata(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    api();
  }, []);
  return (<><div className='flex justify-center items-center h-[30vh] md:h-[30vh] lg:h-[100vh] '>
    {apidata ? (<div className='w-[400px] md:w-[678px] h-[100px] md:h-[100px] lg:h-[444px] md:p-[20px] '>
      <div className='flex justify-between'>
        <img className='w-[65px] h-[65px] md:w-[125px] md:h-[125px] border-[2px] border-black rounded-full' src={apidata.profile_pic_url} alt='img' />
        <div className=' flex flex-col justify-center items-center'>
          <div className='text-[1.1rem] md:text-[1.5rem] md:font-extrabold'>
            {apidata.media_count}
          </div>
          <div className='text-[1.1rem] md:text-[1.5rem] md:font-extrabold'>
            posts
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className='text-[1.1rem] md:text-[1.5rem] md:font-extrabold'>
            {apidata.follower_count}
          </div>
          <div className='text-[1.1rem] md:text-[1.5rem] md:font-extrabold'>
            followers
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className='text-[1.1rem] md:text-[1.5rem] md:font-extrabold'>
            {apidata.following_count}
          </div>
          <div className='text-[1.1rem] md:text-[1.5rem] md:font-extrabold'>
            following
          </div>
        </div>

      </div>
      <div className='text-[0.85rem] lg:text-[0.9rem] mt-[8px] font-bold'>
        <ul>{apidata.full_name}</ul>
        <ul>{apidata.category}</ul>
        <ul>{apidata.biography}</ul>
        <a>{apidata.external_url && apidata.external_url}</a>
      </div>
    </div>
    ) : (
      <div class="flex items-center justify-center h-screen">
        <div class="relative">
          <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
          </div>
        </div>
      </div>
    )}
  </div>  </>
  )
}

export default InstaDetail
