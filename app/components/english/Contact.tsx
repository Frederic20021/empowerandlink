import Image from "next/image";
import { getAssetPath } from "../../utils/paths";
import ContactButton from "../ui/contactButton";
import ContactButtonIframe from "../ui/ContactButtonIframe";

export default function Contact() {
    return <div>
        {/* Contact section */}
        <div 
          style={{ backgroundImage: `url('${getAssetPath('/english/serviceQ.jpg')}')` }}
          className="grid mt-8 py-8 text-center">
            <div className='p-4'>
              <h3 className="text-2xl font-bold text-white mb-2">その他のご質問・お問い合わせ</h3>
              <p className='font-bold text-white'>CONTACT</p>
            </div>
          <div className='grid md:grid-cols-2 mx-auto gap-16 justify-between items-center relative'>
            <div className='flex flex-col items-center gap-4'>
              <Image
                src={getAssetPath('/english/englishContact1.jpg')}
                alt="Service Question 1"
                width={64}
                height={64}
                className="rounded-lg justify-center"
              />
              <h3 className='text-white font-bold text-lg mt-2'>Webからの問い合わせはこちら</h3>
              <ContactButton pageName="英語教育サービスに関して"/>
            </div>
            
            {/* Vertical divider line - only visible on medium screens and up */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2"></div>
            
            <div className='flex flex-col items-center gap-4'>
              <Image
                src={getAssetPath('/english/englishContact2.jpg')}
                alt="Service Question 2"
                width={64}
                height={64}
                className="rounded-lg justify-center"
              />
              <h3 className='text-white font-bold text-lg mt-2'>お電話での問い合わせはこちら</h3>
              <span className="py-2 px-4">
                <span className='text-xs'>Tel</span><span className='text-2xl text-center'>090-4565-4671</span>
              </span>
            </div>
          </div>
        </div>
    </div>
}