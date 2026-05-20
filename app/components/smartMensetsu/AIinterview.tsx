'use client';
import BTN from "../ui/BTN";
// Adjust these to match smart-mensetsu.com's actual header/footer heights in pixels
const HEADER_HEIGHT = 100;
const FOOTER_HEIGHT = 920;
// Controls how tall the visible iframe window is, independent from clipping offsets
const IFRAME_WINDOW_HEIGHT = 1000;

export default function AIinterview() {
    return (
        <section className="w-full">
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: `${IFRAME_WINDOW_HEIGHT}px`,
                    overflow: 'hidden',
                }}
            >
                <iframe
                    src="https://smart-mensetsu.com/#"
                    title="AI Interview"
                    scrolling="yes"
                    style={{
                        width: '100%',
                        height: `${IFRAME_WINDOW_HEIGHT + HEADER_HEIGHT + FOOTER_HEIGHT}px`,
                        marginTop: `-${HEADER_HEIGHT}px`,
                        border: 'none',
                    }}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-black/25 backdrop-blur-xl">
            <div className=" mt-4 py-6 mx-auto w-fit rounded-xl border bg-gradient-to-b from-[#40637D] to-[#40637D]/80 px-6 text-center text-3xl font-bold shadow-sm">
                AI一次面接サービス
            </div>
                </div> 
            </div>
            <div className="flex flex-col items-center bg-white py-8">
                <BTN text="無料デモを申し込む" href="https://empowerandlink.com/contact" />
            </div>
        </section>
    );
}