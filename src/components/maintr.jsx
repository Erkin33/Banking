export default function Tranzaction(){
    return(
        <div className="w-full h-[824px] pl-[162px] pr-[297px] py-[100px] gap-[120px] flex justify-center items-start flex-row">
            <img src="./Main/Arrows.svg" alt="" className="absolute right-[110.05px] w-[417.95px] h-[382.73px] "/>



            {/* LEFT */}
            <div className="w-[825.98px] h-[488px] flex flex-col gap-[50px]">
                <div className="w-full h-[375px] gap-[20px] flex flex-col items-start">
                    <div className="w-[357px] bg-[#262626] rounded-[61px] h-[44px] pl-[12px] pr-[20px] py-[10px] gap-[6px] flex">
                        <img src="./Main/Tick.svg" alt="" className="w-[24px] h-[24px] "/>
                        <p className="text-[#ffffff] text-[18px]">No LLC Required, No Credit Check.</p>
                    </div>
                    <div className="w-full h-[311px] gap-[14px] flex flex-col items-start">
                        <p className="text-[#FFFFFF] font-lexend-medium text-[48px] leading-[72px] font-medium">
                        Welcome to YourBanK 
                        <br />
                        Empowering Your <span className="text-[#CAFF33]">Financial
                        <br /> Journey</span> 
                        </p>

                        <p className="text-[18px] leading-[30px] font-lexend-light font-light text-[#E4E4E7] flex-wrap" >
                        At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
                        </p>
                    </div>
                </div>
                <button className="w-[183px] h-[63px] bg-[#CAFF33] text-[#1C1C1C] rounded-[82px] px-[30px] py-[18px] font-lexend-regilar">
                    Open Account
                </button>
            </div>

            {/* RIGHT */}
            <div className="w-[515.02px] border-[1px]  shadow-lg h-[624.48px] gap-[26.01px] p-[34.68px] rounded-[10.4px] flex flex-col border-box z-[100]" id="second-block" style={{backgroundBlendMode: 'normal, screen, normal'}}>

            </div>
        </div>
    )
}