import kurir from "../../../../public/14.png";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW",{
    cache: "no-store",
  });
  const data = await response.json();
  return data;
} 

export const Promo = async () => {
  const {data} = await getData();
  return (
    <div className="flex flex-col items-center bg-[#F3D2C9]">
      <div className="flex justify-center pt-[50px]">
        <h1 className="font-serif text-[80px] text-[#715B56]">Promo This Month</h1>
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-6 w-[1200px] mt-[50px]">
        {data.map(({id, _id, attachment, producttype})=>{
          if(producttype == "Promo"){
            return(
              <Link key={id} href={`/Order-form/${_id}`}>
                  <Image key={id} src={attachment} width={200} height={200} alt="" className="h-[200px] w-[200px]" />
              </Link>
              ) 
          }
        })}
      </div>
      <div className="my-7 ">
        <h1 className="text-red-500 font-bold ">Dapatkan tas eksklusif dengan setiap pembelian di atas Rp500.000! </h1>
      </div>
      <div className="flex items-center justify-center w-[1300px] mb-10 p-10 gap-5 bg-[#BFC0E4] rounded-3xl">
        <Image src={kurir} className="h-[300px] w-[400px]" />
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
