import Banner from "@/components/Banner";
import HotelCarousel from "@/components/Carousel/HotelCarousel";
import Layout from "@/layout/layout";


export default function Page() {
  return (
    <Layout title={"Đặt vé máy bay, Tour du lịch, khách sạn giá rẻ 2023"}>
        <div>
          <Banner/>
          <div className="mt-20">
            <div className="w-[70%] mx-auto">
                <h1 className="text-center lg:text-left text-xl lg:text-2xl font-semibold">Khách Sạn Khuyến Mãi</h1>
                <p className="text-[15px] mt-2">Chính sách ưu đãi tại Vietnam Booking lên đến 60% tiền phòng</p>
                <div>
                  <HotelCarousel/>
                </div>
            </div>
          </div>
        </div>
    

    </Layout>
  )
}