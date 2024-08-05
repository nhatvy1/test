import MainSection from '@/components/commons/MainSection'
import type { Metadata } from 'next'
import Image from 'next/image'
import { bannerGioiThieu } from '../../../public/gioithieu'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'

export const metadata: Metadata = {
  title: 'Về chúng tôi - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}

export default function page() {
  const breadCrumb = [
    {
      text: 'Giới thiệu',
      href: '/gioi-thieu'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />

      <MainSection className='py-10 px-[15px] bg-white'>
        <div>
          <h1 className='text-5xl text-mid-autumn-festival mb-2 font-titleBanner'>
            Giới thiệu
          </h1>
          <div>
            <h2 className='text-center text-5xl font-titleBanner my-7'>
              Bánh Trung thu 
            </h2>
            <h2 className='text-center  my-7 leading-10'>
              Chuyên Phân Phối Các Loại Bánh Trung Thu Givral - Brodard - Kinh
              Đô - Như Lan- Bibica-Casahana- taithong{' '}
            </h2>
            <h2 className='text-center  my-7'>
              CK tới 30% - in logo công ty - Giao hàng nhanh, miễn phí-Xuất Hóa
              Đơn VAT
            </h2>
            <div className=''>
              <Image
                src={bannerGioiThieu}
                alt='gioi-thieu-tong-hop-banh-trung-thu'
                width={bannerGioiThieu.width}
                height={bannerGioiThieu.height}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='my-4 leading-9 text-justify'>
                Bánh trung thu CQ MART xin chân thành cám ơn sự ủng hộ và tín
                nhiệm của quý khách hàng trong suốt 10 năm vừa qua. Một mùa
                trung thu nữa lại về, thay mặt toàn thể nhân viên công ty xin
                kính chúc quý khách hàng có một mùa trung thu đầm ấm và hạnh
                phúc.
              </p>
              <p className='my-4 text-justify'>
                Bánh trung thu CQ MART là đơn vị phân phối bánh trung thu hàng
                đầu tại TP HCM, là nhà phân phối trực tiếp cấp 1 của các hãng
                bánh danh tiếng hiện nay:{' '}
                <span className='text-[#ff0000]'>
                  Givral, Brodard, Kinh Đô, Như Lan, Bibica, Taithong, Casahana.
                </span>{' '}
                Cty chúng tôi chuyên cung cấp bánh trung thu cho công ty, xí
                nghiệp và đại lý bán lẻ với chất lượng đảm bảo, giá cả cạnh
                tranh nhất. Quý Khách hàng có thể tham khảo nhiều nơi, nhưng hãy
                liên hệ với chúng tôi để được trải nghiệm dịch vụ 4 NHẤT:
              </p>
              <p className='text-sm'>
                <span className='text-[#ff0000] font-medium'>
                  1. Sản phẩm tốt nhất
                </span>
                : Bánh mới sản xuất với hạn sử dụng luôn đảm bảo tốt nhất, chính
                hãng, đảm bảo chất lượng 100%, trực tiếp xuất xưởng từ nhà máy
                tới khách hàng.​
              </p>
              <p className='text-sm'>
                <span className='text-[#ff0000] font-medium'>
                  2. Giá tốt nhất
                </span>
                : Là nhà phân phối chính thức của các Hãng bánh nổi tiếng, không
                qua trung gian, nên chúng tôi luôn cam kết có chính sách giá và
                chiết khấu bán hàng tốt nhất cho khách hàng. Quý khách đặt số
                lượng càng nhiều, chiết khấu càng cao lên tới 30%. Phục vụ giao
                hàng miễn phí và CK cho cả khách hàng mua lẻ. ​
              </p>
              <p className='text-sm'>
                <span className='text-[#ff0000] font-medium'>
                  3. Giao hàng nhanh nhất
                </span>
                Chúng tôi có dịch vụ giao hàng nhanh, đúng hẹn, miễn phí. Ngoài
                ra hỗ trợ giao hàng tân nơi tới các tỉnh, thành lân cận TP HCM.
              </p>
              <p className='text-sm'>
                <span className='text-[#ff0000] font-medium'>
                  4. Dịch vụ tốt nhất
                </span>
                Tư vấn nhiệt tình, miễn phí. Xuất hóa đơn VAT theo yêu cầu. Hỗ
                trợ In logo doanh nghiệp miễn phí lên hộp bánh, túi xách. Quà
                tặng hấp dẫn cho người liên hệ đặt hàng.
              </p>
              <p className='text-sm'>
                Với đội ngũ nhân viên tư vấn tận tình, chu đáo. Chúng tôi tin
                chắc sẽ làm hài lòng quý khách về cung cách phục vụ cũng như
                chất lượng sản phẩm. Hãy liên hệ với chúng tôi ngay hôm nay để
                nhận được báo giá và chiết khấu tốt nhất.
              </p>
              <p>
                Để có chiết khấu tốt nhất và đầy đủ mã bánh, hãy liên hệ ngay
                với chúng tôi hôm nay.
              </p>
              <p>
                <Link href='/' className='uppercase font-medium'>
                  BÁNH TRUNG THU CQ MART
                </Link>
              </p>
              <p>
                <span className='font-semibold'>
                  Công Ty TNHH Đầu Tư Thương Mại Dịch Vụ TVA{' '}
                </span>{' '}
                <span className='ml-[20px]'>MST</span>:{' '}
                <span className='font-semibold'>0315818543</span>
              </p>
              <p className='text-sm'>
                Địa chỉ: 59 Nguyễn Khắc Nhu, P. Cô Giang, Quận 1, TP.HCM
              </p>
              <p className='text-sm'>
                Hotline: <span className='text-[#ff0000]'>0906 309 885</span>
                <span className='text-[#ff0000] mx-2'>0933 138 885</span>
                <span className='text-[#ff0000]'>0906 986 885</span>
              </p>
              <p className='text-sm'>
                <span>
                  Tel: <span className='text-[#ff0000]'>028 38374987</span>{' '}
                </span>
                <span className='ml-10'>
                  Fax: <span className='text-[#ff0000]'>028 38360973</span>
                </span>
              </p>
              <p className='text-sm'>
                Email :{' '}
                <span className='text-[#0000ff]'>kinhdoanh@cqmart.vn</span>
              </p>
              <p className='text-sm'>
                Website :{' '}
                <Link href='#' className='text-[#0000ff] underline'>
                  trungthu.congquynh.vn
                </Link>
              </p>
              <p className='text-sm'>
                Facebook :{' '}
                <Link href='#' className='text-[#0000ff] underline'>
                  www.facebook.com/banhtrungthucqmart
                </Link>
              </p>
              <p className='text-sm italic'>
                Bánh Trung Thu Kinh Đô – Givral –Brodard - Như Lan Chiết Khấu
                Cao, Giao Hàng Nhanh
              </p>
              <p>
                <span className='uppercase font-medium'>
                  BÁNH TRUNG THU CQMART
                </span>{' '}
                Địa chỉ MUA BANH TRUNG THU 2024 UY TIN TP HO CHI MINH
              </p>
            </div>
          </div>
        </div>
      </MainSection>
    </>
  )
}
