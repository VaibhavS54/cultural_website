import React from 'react';
import { useState,useEffect } from 'react';

const InstaDetail = ({account}) => {

   
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
    return (<><div className='flex justify-center items-center  h-[100vh] '>
        {apidata && (<div className=' w-[678px] h-[444px] p-[20px] '>
            <div className='flex  justify-between'>
                <img className='w-[125px] h-[125px] border-[2px] border-black rounded-full' src={apidata.profile_pic_url} alt='img' />
                <div className=' flex flex-col justify-center items-center'>
                    <div className='text-[1.5rem] font-extrabold'>
                        {apidata.media_count}
                    </div>
                    <div className='text-[1.2rem] font-bold'>
                        posts
                    </div>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <div className='text-[1.5rem] font-extrabold'>
                        {apidata.follower_count}
                    </div>
                    <div className='text-[1.2rem] font-bold'>
                        followers
                    </div>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <div className='text-[1.5rem] font-extrabold'>
                        {apidata.following_count}
                    </div>
                    <div className='text-[1.2rem] font-bold'>
                        following
                    </div>
                </div>

            </div>
            <div className='mt-[8px] font-bold'>
                <ul>{apidata.full_name}</ul>
                <ul>{apidata.category}</ul>
                <ul>{apidata.biography}</ul>
                <a>{apidata.external_url && apidata.external_url}</a>
            </div>
        </div>)}
        </div>  </>
    )
}

export default InstaDetail
