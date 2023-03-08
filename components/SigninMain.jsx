import React from 'react'
import SigninBox from './SigninBox'
import SigninForm from './SigninForm'
import logo from '../public/logo.png'
import womancash from '../public/womancash.png'
import Image from 'next/image'

const SigninMain = () => {
  return (
    <div id='bkg-pattern' className='h-screen w-screen flex justify-center content-center text-center flex-wrap'>
        <div className='flex flex-row max-h-[5/6] w-5/6 h-5/6 bg-[#020158] rounded-2xl'>
          {/* left - logo, slogan, graphics */}
          <div className='overflow-clip max-h-[5/6] flex flex-col w-3/5 content-center justify-center text-center'>
            <h3 className='max-w-[400px] self-center mb-2'><Image src={logo} alt=''/></h3>
            <h4 className='text-white text-xl italic'>Pay your vendors in a snap!</h4>
            <div className='max-w-[400px] self-center mt-10'><Image src={womancash} alt=''/></div>
          </div>
          {/* right - sign in */}
          <div className='overflow-clip flex h-full w-2/5 bg-white rounded-tr-2xl rounded-br-2xl justify-center content-center'>
            {/* sign in box */}
              <div className='flex content-center justify-center text-center self-center'>
                <SigninForm />
              </div>
          </div>

          
        </div>
    </div>
  )
}

export default SigninMain