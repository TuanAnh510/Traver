import Banner from "@/components/Banner";
import Layout from "@/layout/layout";


export default function Page() {
  return (
    <Layout title={"Đặt vé máy bay, Tour du lịch, khách sạn giá rẻ 2023"}>
        <div>
          <Banner/>
          <div className="mt-20">
            <div className="w-[70%] mx-auto">
                <h1 className="text-center lg:text-left text-xl lg:text-2xl font-semibold">Khách Sạn Khuyến Mãi</h1>
            </div>
          </div>
        </div>

    </Layout>
  )
}