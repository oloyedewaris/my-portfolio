import React from 'react'
import { CloseOutlined, CheckCircleOutlined } from "@ant-design/icons";

function Modal({ item, setItem }) {
  return (
    <>
      <div className='modal' onClick={() => setItem(null)} />
      <div className='modal_main'>
        <div className='relative'>
          <div className="absolute top-0 right-0"><CloseOutlined onClick={() => setItem(null)} /></div>
          <h1 className='text-2xl my-3'>{item.name}</h1>
          <p className='text-xl my-auto'>{item.description}</p>
          <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2'>
            <div>
              <h4 className='text-2xl my-4 text-center'>Tools Used</h4>
              <div className='mx-auto grid grid-cols-2 items-center justify'>
                {item.tools.map(tool => (
                  <div className='mx-4 flex items-center'>
                    <CheckCircleOutlined style={{ fontSize: 18 }} />
                    <span className='ml-2 font-medium'>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='mx-6 py-4'>
              <img src={item.imgurl} className='w-56 minh-44 rounded' alt='my work' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
