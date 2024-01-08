import bikerJacket from "../../../../public/promo/biker-jacket.png";
import Image from "next/image";

export const Promo = () => {
  return (
    <div className="flex flex-col items-center h-[1100px] bg-[#F3D2C9]">
      <div className="flex justify-center pt-[50px]">
        <h1 className="font-serif text-[80px] text-[#715B56]">Promo This Month</h1>
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-6 w-[1200px] mt-[50px]">
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
        <Image src={bikerJacket} className="h-[200px] w-[200px]" />
      </div>
      <div className="my-7 ">
        <h1 className="text-red-500 font-bold ">Dapatkan tas eksklusif dengan setiap pembelian di atas Rp500.000! </h1>
      </div>
      <div className="flex items-center justify-center w-[1300px] p-10 gap-5 bg-[#BFC0E4] rounded-3xl">
        <Image src={bikerJacket} className="h-[200px] w-[500px]" />
        <div className="w-[674px]">
          <h1 className="text-[22px] text-[#1B2430]">
            Nikmati pengalaman berbelanja tanpa beban dengan GRATIS ONGKIR untuk setiap pembelian di atas Rp. 500.000 . Belanja sekarang dan rasakan kenyamanan pengiriman langsung ke pintu Anda, tanpa biaya tambahan! Jangan lewatkan
            kesempatan ini, segera temukan produk pilihan Anda dan nikmati pengiriman gratis!
          </h1>
        </div>
      </div>
    </div>
  );
};
