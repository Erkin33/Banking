export default function Header(){
    return(
        <>
        <div className="w-[759px] h-[610.81px] absolute left-[0.0001px]">
        <img 
          src="./Main/top-left-line.svg"
          className="w-full"
        />
      </div>
      <div className="w-full h-[400px] flex justify-center flex-col items-center">
      <header className="w-[1596px] h-[95px] px-[34px] py-[20px] flex items-center justify-between bg-[#1C1C1C] border border-[#262626] rounded-full">
          <img 
          src="./Main/Logo.svg"
          className="w-[155.83px] h-[40px]"
          />

          <div className="w-[371px] h-[51px] flex flex-row items-center p-0 gap-[26px]  flex-grow-0 z-[2] justify-between">
            <a className="w-[100px] h-[51px] text-[#FFFFFF] flex flex-row justify-center text-[18px] items-center  gap-[10px] bg-[#262626] rounded-[82px] order-0 flex-none" href="/">
              Home
            </a>
            <a className="w-[68px] h-[27px] text-white text-[18px] leading-[150%] font-[400] font-lexend order-1 flex-none" href="/">
            Careers
            </a>
            <a className="w-[68px] h-[27px] text-white text-[18px] leading-[150%] font-[400] font-lexend order-1 flex-none" href="/">
            About
            </a>
            <a className="w-[68px] h-[27px] text-white text-[18px] leading-[150%] font-[400] font-lexend order-1 flex-none" href="/">
            Security
            </a>
          </div>

          <div className="w-[208px] h-[55px] flex justify-between items-center ">
            <a className="w-[69px] h-[27px] text-[#ffffff] flex justify-center items-center" href="/">
              Sign Up
            </a>
            <a className="w-[109px] h-[55px] flex justify-center items-center bg-[#CAFF33] rounded-[82px]" href="/">
              Login
            </a>
          </div>
      </header>
      </div></>
    )
}