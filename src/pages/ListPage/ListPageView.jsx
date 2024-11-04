import React from 'react'
import PopupController from '../../components/PopUp/PopupController';

// sadece arayüz  (jsx kodu) yazarız
const ListPageView = ({ posts , isOpen , setIsOpen }) => {
  return (
    <main className='container-sm px-5 py-5 sm:px-30 md:px-40 lg:px-52'>
      <h1>Gönderi Sayısı:{''}
        <span className='font-bold text-green-500 p-2'>{posts?.length}</span>
      </h1>

      { !posts ? (
         <p>Yükleniyor...</p>
         ) :(
        posts.map((post) => (
           <div
               className='w-full bg-gray-500 text-gray-800 my-5 p-5 rounded-md shadow shadow-[#ffffff38] cursor-pointer hover:shadow-green-300'
               key={post.id}
           >
            <div className='flex justify-between'>
              <h3>{post.title}</h3>
              <p
              onClick={()=>setIsOpen(post.user)}
              className='text-green-500 font-bold'
              >
              {post.user}
             </p>
            </div>

            <div className='mt-4 text-white'>{post.text}</div>
           </div>
        ))
        )}

      {isOpen && <PopupController isOpen={isOpen} setIsOpen={setIsOpen}/>}  
    </main>
      )
    }

export default ListPageView;