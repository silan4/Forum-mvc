import React from 'react'

const PopupView = ({ posts, isOpen, setIsOpen }) => {
    return (
        <div className=' grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-1'>
            <div className='w-3/4 max-w-[600px] bg-gray-800 p-5 rounded-md '>
                <div className='flex justify-between'>
                    <h4 >
                        <span className='font-bold text-green-500 me-2'>{isOpen}</span>
                        Kullanıcısının gönderileri
                    </h4>
                    <button
                        onClick={() => setIsOpen(null)}
                        className='bg-green-500 p-2 rounded-md hover:bg-green-600 '
                    >
                        Kapat
                    </button>
                </div>

                {!posts ? (
                    <p>Yükleniyor</p>
                ) : (
                    posts.map((post) => (
                        <div className="bg-gray-500 p-3 rounded-md my-4">
                            <h2 className="font-bold text-gray-800">{post.title}</h2>
                            <p>{post.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default PopupView