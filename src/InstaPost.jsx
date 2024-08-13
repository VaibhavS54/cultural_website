import React, { useEffect, useState } from 'react';
import "./styles.css";
import InstaDetail from './InstaDetail';


const InstaPost = ({account}) => {
  
  const [selected, setSelected] = useState("posts");
  const [selectedBox, setSelectedBox] = useState('red'); 
  const [apidata, setApidata] = useState(null);
  const handleClick = (color) => {
    setSelectedBox(color); 
    if (color == 'green') {
      setApidata(null);
      setSelected("reels");
      
    }
    else if (color == 'red') {
      setApidata(null);
      setSelected("posts");
    }
  };
  
  const api = async (prop) => {
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/${prop}?username_or_id_or_url=${account}&url_embed_safe=true`;
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

      console.log(prop, result);
      setApidata(result.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    api(selected);
  }, [selected]);
  return (
  
  
  
  
  <div className='text-[white] min-w-screen flex justify-center items-center lg:pl-24 flex-col lg:flex-row'>
    <InstaDetail account={account}/>
    <div className='m-10 w-[306px] md:w-[612px] h-[336px] md:h-[672px] bg-black rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] '>
      <div className='h-[64px]  flex gap-[2px] mb-[2px]  '>
        <div
          className={`w-[153px] md:w-[336px]  flex justify-center items-center ${selectedBox === 'red' ? 'border-b-[5px] border-white  text-white' : 'text-[grey]'
            }`}
          onClick={() => handleClick('red')} 
        >
          Posts
        </div>
        <div
          className={` w-[153px] md:w-[336px]  flex justify-center items-center ${selectedBox === 'green' ? 'border-b-[5px] border-white  text-white' : 'text-[grey]'
            }`}
          onClick={() => handleClick('green')}
        >
          Reels
        </div>

      </div>
      {apidata ?(
        <div className=' w-[306px] md:w-[612px] h-[304px] md:h-[608px] bg-black gap-[1.4px] md:gap-[2.8px] rounded-bl-[30px] rounded-br-[30px]  flex flex-wrap overflow-y-scroll scrollbar-hide'>
        {apidata && apidata.map((item) => (
          item.thumbnail_url && (
            <img className={`w-[101px] h-[100px] md:w-[202px] md:h-[200px] object-fit-cover`} src={item.thumbnail_url} alt={'Image description'} key={item.id} />
          )
        ))}
      </div>
      ):(<div class="flex items-center justify-center h-[50vh]">
              <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
              </div>
            </div>)}
      
    </div>
  </div>
  );
};

export default InstaPost;
