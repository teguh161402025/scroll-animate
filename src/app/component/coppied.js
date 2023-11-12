'use client'
import { React, useState } from 'react'
import ReactDOMServer from 'react-dom/server';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
const Coppied = ({ _copy }) => {
  const [copy, setCopy] = useState(false);
  const stringCopy = _copy
  return (
    <div>
      <div onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(stringCopy);
        setTimeout(() => {
          setCopy(false)
        }, 1000)
      }} className={` flex space-x-2 cursor-pointer text-sm font-normal text-[10px] `}>
        {
          copy ?
            < >
              <FaClipboardCheck className='mt-[2px]' size={14} />
              <span>Coppied !</span>
            </>
            : <>  <FaClipboard className='mt-[2px]' size={14} />
              <span>Copy Code</span>
            </>

        }

      </div>
    </div>
  )
}

export default Coppied