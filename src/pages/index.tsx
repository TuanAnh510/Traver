import Banner from "@/components/Banner";
import ComboCarousel from "@/components/Carousel/ComboCarousel";
import Destination from "@/components/Carousel/Destination";
import HotelCarousel from "@/components/Carousel/HotelCarousel";

import Layout from "@/layout/layout";


export default function Page() {
  return (
    <Layout title={"Đặt vé máy bay, Tour du lịch, khách sạn giá rẻ 2023"}>
      <div>
        <Banner />
        <div className="mt-20">
          <div className="w-[70%] mx-auto">

            <div>
              <HotelCarousel />
            </div>
            <div className="mt-16">
              <ComboCarousel />
            </div>
            <div className="mt-16">
              <Destination />
            </div>
          </div>
        </div>

      </div>


    </Layout>
  )
}