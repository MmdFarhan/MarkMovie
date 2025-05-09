import React from 'react';

function Banner(){
    return(
        <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage:'url(https://sm.mashable.com/mashable_in/seo/3/38983/38983_u23h.jpg)'}}>
            <div className='text-white text-xl p-4 text-center w-full bg-gray-900/60'>Interstellar</div>

        </div>
    )
}

export default Banner;