import React from 'react'

const NavBottom = () => {
    return (
        <div className='grid grid-cols-4 gap-x-16 ml-7 mx-auto text-center justify-center'>
            <div className='flex gap-2 w-[200px] iconlogo' >
                <img src='./iconlogo/quality.png' className='w-[50px] h-[50px]' />
                <p>Đảm bảo giá tốt nhất</p>
            </div>
            <div className='flex gap-2 w-[200px] iconlogo' >

                <img src='./iconlogo/map.png' className='w-[50px] h-[50px]' />
                <p>Đa dạng điểm đến lựa chọn tốt nhất</p>

            </div>
            <div className='flex gap-2 w-[250px] iconlogo' >


                <img src='./iconlogo/medal.png' className='w-[50px] h-[50px]' />
                <p>Đảm bảo chất lượng phục vụ tốt nhất</p>
            </div>
            <div className='flex gap-2 w-[200px] iconlogo' >
                <img src='./iconlogo/operator.png' className='w-[50px] h-[50px]' />
                <p>Hỗ trợ khách hàng nhanh nhất</p>
            </div>
        </div>
    )
}

export default NavBottom