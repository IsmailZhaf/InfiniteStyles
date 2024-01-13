import Image from "next/image";
import star from "../../../../public/star_icon.png";

export const KidsCard = ({ link, name, price }) => {
    return (
    <div className="w-[250px] h-[380px] rounded-t-3xl bg-[#E5DBD9] ">
        <Image src={link} width={250} height={360} className="rounded-t-3xl" alt={""} />
        <div className="ml-5 mt-2 space-y-2">
            <div className="flex gap-[3px]">
             <Image src={star} alt={""} />
             <Image src={star} alt={""} />
             <Image src={star} alt={""} />
             <Image src={star} alt={""} />
             <Image src={star} alt={""} />
            </div>
          <h1 className="h-[50px] text-[20px] font-semibold">{name}</h1>
          <h1 className="text-[20px] tracking-wide mt-10">Rp{price}.000</h1>
        </div>
    </div>
    );
  };