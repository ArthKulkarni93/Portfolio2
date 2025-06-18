export default function Footer() {
    return <div className="mt-20 flex justify-between">
        <div className="text-[#666666] text-xs">
            Arth Kulkarni
        </div>

        <div className="text-white flex ">
            {/* <hr className="bg-slate-400 border h-4" /> */}
            <a href="https://x.com/KulkarniArth">
                <img className="h-[16px] hover:cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="" />
            </a>
            
        </div>
    </div>
}