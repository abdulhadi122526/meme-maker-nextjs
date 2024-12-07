"use client"

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useRef, useState } from 'react'

const CreateMeme = () => {
    const [image, setImage] = useState()
    const searchParams = useSearchParams()
    const url = searchParams.get("url")
    const id = searchParams.get("id")
    const text1 = useRef()
    const text2 = useRef()


    const generate = async (e) => {
        e.preventDefault()

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=AbdulHadi123&password=ahadi123&text0=${text1.current?.value}&text1=${text2.current?.value}`, {
            method: 'POST'
        })
        const response = await data.json()
        setImage(response.data.url)
        console.log(image);
        document.getElementById('my_modal_3').showModal()


    }





    return (
        <>
            <div className='text-2xl mt-5 text-center'>Make your fun <span className="swap">🥳</span></div>
            
            <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                <div>
                    <Image
                        className='ms-52 mt-10'
                        src={url}
                        width={400}
                        height={300}
                        alt="meme-image"

                    />
                </div>
                <div>
                    <form action="" className='mt-44 md:ms-44 lg:ms-0' onSubmit={generate}>

                        <input type="text" placeholder='text 1' className="border-2 w-[400px] py-1 rounded-md ps-2 mb-5" ref={text1} /> <br />
                        <input type="text" placeholder='text 2' className="border-2 w-[400px] py-1 rounded-md ps-2" ref={text2} /> <br />
                        <button type='submit' className='bg-teal-900 px-10 py-1 text-white rounded-md mt-7 ms-[250px]'>Generate</button>
                    </form>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        {image ? 
                        <Image
                        src={image}
                        alt="meme"
                        width={400}
                        height={300}
                        /> : null }
                            
                    </div>
                </dialog>
            </div>


        </>
    )
}

export default CreateMeme