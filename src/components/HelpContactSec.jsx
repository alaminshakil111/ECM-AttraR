import React from 'react';

import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";



const HelpContactSec = () => {
    return (
        <div className='HelpContentBox grid md:grid-cols-2 place-content-center py-8 pb-8 px-3 '>
            <div className='enterEmail mb-4'>
                <div className='emailTitleHd relative grid items-center '>
                    <span className='absolute left-0 ' >
                        <MdOutlineEmail />
                    </span>
                    <strong className=' relative left-5 text-[13px] ' >
                        GET SPECIAL DISCOUNTS IN YOUR INBOX
                    </strong>
                </div>
                <div className='emailInput flex flex-col md:flex-row gap-2 justify-between  '>
                    <input type="email" placeholder='Enter email to get offers, discounts and more...' className=' outline-0 border-b-1 border-b-gray-400 text-[13px]  ' />
                    <button type='submit' className='bg-amber-700 rounded-[5px] w-[110px] p-1  ' > Subscribe </button>
                </div>
            </div>
            <div className='helpGet'>
                <div className='helpTitleHd relative grid items-center '>
                    <span className='absolute left-0' >
                        <MdOutlinePhoneInTalk />
                    </span>
                    <strong className='relative left-5 text-[13px]'>
                        FOR ANY HELP YOU MAY CALL US AT
                    </strong>
                </div>
                <div class="helpContactNumber">
                    <span >
                        +88 0987654321
                        <br />
                        Open 24 Hours a Day, 7 Days a week 
                    </span>
                </div>

            </div>
            
        </div>
    );
}

export default HelpContactSec;