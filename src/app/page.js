import { HomeSection1 } from '@/components/HomePage/Components/Home.Section1';
import { HomeSection2 } from '@/components/HomePage/Components/Home.Section2';
import { HomeSection3 } from '@/components/HomePage/Components/Home.Section3';
import { HomeSection4 } from '@/components/HomePage/Components/Home.Section4';
import { Footer } from '@/components/HomePage/Templates/Footer';
import { Header } from '@/components/HomePage/Templates/Header';
import { UserButton } from '@clerk/nextjs';

function Page() {
  return (
    <div>
      <Header/>
      <main className="justify-center items-center">
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </main>
      <Footer/>
    </div>
  );
}

export default Page;
