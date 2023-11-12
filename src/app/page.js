"use client";
import { useState } from 'react';
import ScrollAnimate from 'react-animation-scroll';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import 'react-animation-scroll/dist/index.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import animationList from './component/animationList';
import Coppied from './component/coppied';
export default function Home() {

  const [copy, setCopy] = useState(false);

  const goToHandler = (dest) => {

    const element = document.getElementById(dest);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const codeHiglight = (animationTitle, index) => {

    const animation = animationTitle.toLowerCase().replace(/\s/g, '-');
    const codeString = `<ScrollAnimate animation={'${animation}'}>${animationTitle}</ScrollAnimate>`

    return <div key={index}>
      <ScrollAnimate infinite={true} animation={`${animation}`}>
        <div className='font-bold text-4xl p-2 ' >
          {
            animationTitle
          }
        </div>
        <div className='h-8 bg-slate-800 text-white font-semibold text-sm p-2 rounded-t-lg flex justify-between'>
          <span> html</span>
          <Coppied _copy={codeString} />

        </div>
        <SyntaxHighlighter language="html" style={atomOneDark} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
          wrapLines={true}  >
          {codeString}
        </SyntaxHighlighter>
      </ScrollAnimate>

    </div>



  }
  return (
    <main className='container mx-auto py-12'>


      <div className='min-h-screen flex justify-center items-center text-center '>
        <div className='p-4 space-y-24'>
          <div className='text-4xl text-[#f7f5f5] font-bold'>React Animation Scroll</div>

          <div onClick={() => goToHandler('documentation')} className='text-xl text-[#f7f5f5] border-2 border-red-400 rounded-lg p-4
           hover:shadow-xl cursor-lg transform ease-in-out delay-100 cursor-pointer'>Documentation</div>
          <div onClick={() => goToHandler('demo')} className='text-xl text-[#f7f5f5] space-y-8 cursor-pointer'> <span>Demo</span>
            <div className='flex justify-center '>
              <FaChevronDown className='text-red-400 bounce' size={44} />
            </div>
          </div>
        </div>

      </div>

      <div id='demo' className='h-full'>
        {
          animationList.map((animation, index) =>
            <div key={index} className='flex justify-center border-2 border-red-400 p-12 m-8 lg:m-32 bg-[#f7f5f5] rounded-lg' >

              <div className='  py-32 space-y-24'>
                <div className='text-3xl font-bold flex justify-center border-y-2 border-red-400 py-2'>
                  {
                    animation.title
                  }
                </div>
                <div className='space-y-44'>
                  {
                    animation.list.map((a, index) => codeHiglight(a, index))
                  }
                </div>
              </div>
            </div>


          )
        }



      </div>

      <div id='documentation' className='lg:mx-24 mx-6 p-8 space-y-12 bg-[#233254] rounded-lg'>
        <span className='text-[#f7f5f5] font-bold text-xl'>Documentation</span>
        <div>
          <a href='https://github.com/teguh161402025/react-animation-scroll' title='github' target='_blank' rel='noopener noreferrer' > <div className='w-44 space-x-2 flex justify-center p-2 hover:bg-red-400 transition-colors ease-in-out delay-100 border-2 border-red-400 rounded-md text-[#f7f5f5] font-semibold cursor-pointer'>
            <span>View On Github</span>
            <FaGithub size={24} />
          </div></a>
        </div>

        <div className='space-y-6 text-[#f7f5f5] '>
          <span className='text-[#f7f5f5] font-bold text-xl'>Installation</span>
          <p className='text-md'>Install with npm:</p>
          <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            wrapLines={true} className='p-4' language="bash" style={atomOneDark} >
            {'npm install React-animation-scroll'}
          </SyntaxHighlighter>
          <p className='text-md'>Import it into your file:</p>
          <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            wrapLines={true} className='p-4' language="javascript" style={atomOneDark} >
            {"import ScrollAnimate from 'scroll-animate';"}
          </SyntaxHighlighter>
          <p className='text-md'>Add CSS into your file:</p>
          <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            wrapLines={true} className='p-4' language="javascript" style={atomOneDark} >
            {"import 'scroll-animate/dist/index.css';"}
          </SyntaxHighlighter>


        </div>


        <div className='space-y-6 text-[#f7f5f5] '>
          <span className='text-[#f7f5f5] font-bold text-xl'>Basic Usage</span>

          <p className='text-md'>Add the <span className='text-orange-500'>{'<ScrollAnimate> '}</span>Component to the element that will be animated and include the <span className='text-orange-300'>animation </span>prop specifying the type of animation to be used.<br /> <span className='text-red-600'>Remember animation properties is required</span></p>
          <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            wrapLines={true} className='p-4' language="html" style={atomOneDark} >
            {"<ScrollAnimate animation={'fade-in'}>Fade In</ScrollAnimate>"}
          </SyntaxHighlighter>


        </div>

        <div className='space-y-6 text-[#f7f5f5] '>
          <span className='text-[#f7f5f5] font-bold text-xl'>Properties</span>
          <div className='space-y-4'>
            <p className='text-md font-semibold'>infinite</p>
            <p className='text-md'>Add the <span className='text-orange-500'>{'infinite'}</span> To determine whether the animation will continue to run each time the element enters the viewpoint - default is false.</p>
            <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
              wrapLines={true} className='p-4' language="html" style={atomOneDark} >
              {"<ScrollAnimate  animation={'fade-in'} infinite={true}>Fade In</ScrollAnimate> "}
            </SyntaxHighlighter>
          </div>

          <div className='space-y-4'>
            <p className='text-md font-semibold'>delay</p>
            <p className='text-md'>Add the <span className='text-orange-500'>{'delay'}</span> to Determine the delay time of the animation before it starts running, in milliseconds (ms)</p>
            <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
              wrapLines={true} className='p-4' language="html" style={atomOneDark} >
              {"<ScrollAnimate  animation={'fade-in'} delay={400}>Fade In</ScrollAnimate> The animation will be executed after a delay of 400 milliseconds."}
            </SyntaxHighlighter>
          </div>
          <div className='space-y-4'>
            <p className='text-md font-semibold'>duration</p>
            <p className='text-md'>Add the <span className='text-orange-500'>{'duration'}</span>,to  determine the duration of the animation, in seconds. (s)</p>
            <SyntaxHighlighter lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
              wrapLines={true} className='p-4' language="html" style={atomOneDark} >
              {"<ScrollAnimate  animation={'fade-in'} duration={2}>Fade In</ScrollAnimate> This animation will run for 2 seconds."}
            </SyntaxHighlighter>
          </div>


        </div>
      </div>


    </main >
  )
}
