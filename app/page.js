import Image from "next/image";
import Link from "next/link";
import React from "react";

const Memmes = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  console.log(response.data);

  return (
    <>
        <h1 className="text-3xl text-center my-5">Make a meme, make fun</h1>
      <div className="grid grid-cols-4 ">
       {response.data.memes.map((item ) => {
        return <div className="card card-compact bg-base-100 mx-7 my-7 border border-black pb-5 " key={item.id}>
        <figure>
          <Image
          className="border-2"
            src={item.url}
            width={300}
            height={300}
            alt='meme-image'
            
            />
        </figure>
        <div className=" text-center my-3 pb-5">
          <h2 className="card-title text-2xl pb-5">{item.name.slice(0 , 20)}</h2>
          
          <Link href={{
            pathname: "/creatememe",
            query: {
              url: item.url,
              id: item.id
            }

          }} className="bg-blue-500 justify-center py-2 px-6 rounded-lg  mt-5">
            Generate meme
          </Link>
          
        </div>
      </div>





       })}
      </div>
    </>
  );
};

export default Memmes;
