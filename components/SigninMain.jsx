import React from 'react'
import SigninBox from './SigninBox'

const SigninMain = () => {
  return (
    <div id='bkg-pattern' className='h-screen w-screen flex justify-center content-center text-center flex-wrap'>
        <div className='flex w-5/6 h-5/6 bg-[#020158] rounded-2xl justify-end'>
          <div className='flex h-full w-2/5 bg-white rounded-tr-2xl rounded-br-2xl justify-center content-center'>
            {/* sign in box*/}
              <div className='flex content-center justify-center text-center self-center'>
                {/* <h1 className='text-[48px] font-bold'>Sign in</h1> */}
                <SigninBox />
              </div>
          </div>
        </div>
    </div>
  )
}

export default SigninMain