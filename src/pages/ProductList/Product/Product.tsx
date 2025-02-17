import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to={'/'}>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.04rem] hover:shadow-md duration-100 transition-transform overflow-hidden'>
        <div className='w-full pt-[100%] relative'>
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4h78tiq61vrad_tn.webp'
            alt='Đồng hồ điện tử Unisex Màn hình Led kiểu dáng thể thao, dây cao su êm tay thời trang Hàn Quốc'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>
            Đồng hồ điện tử Unisex Màn hình Led kiểu dáng thể thao, dây cao su êm tay thời trang Hàn Quốc
          </div>
          <div className='flex items-center mt-3 text-orange'>
            <div className='max-w-[50%] text-gray-500 truncate text-inherit'>
              ₫<span>1.000</span>
            </div>
            <div className='ml-2 text-xs p-[0.125rem] bg-[#feeeea] text-inherit rounded-[0.125rem]'>
              <span>-90%</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-start'>
            <div className='flex items-center'>
              <img
                src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg'
                alt='rating-star-full'
              />
              <span className='ml-[0.125rem]'>4.8</span>
              <div className='ml-[0.5rem] mr-[0.5rem] border-l-[1px] border-gray-400 h-[0.625rem]' />
              <div className='text-xs truncate'>Đã bán 3,2k</div>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-start'>
            <img
              src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/5dd7b4560d0e2d3190e8.svg'
              alt='location-icon'
              className='mr-1'
            />
            <span className='capitalize text-gray-500 text-xs'>Hà nội</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
