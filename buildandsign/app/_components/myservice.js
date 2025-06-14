export default async function Myservice() {
    return(
            <div className="w-full h-auto bg-white  px-10 p-10" id="service">
                <div className="max-w-6xl mx-auto flex flex-col">
                    <h2 className="text-black font-extrabold text-5xl">บริการของเรา</h2>
                    <div className="flex justify-center items-center gap-5 pt-10 max-md:grid">
                        <img
                            src="/sign-bg.webp"
                            alt="Sign"
                            className="rounded shadow-lg border-5 border-black w-[500px] h-[300px] max-lg:w-[300px] max-lg:h-[200px] max-md:w-[400px]"
                        />
                        <img
                            src="/building-bg.jpeg"
                            alt="Build"
                            className="rounded shadow-lg border-5 border-black w-[500px] h-[300px] max-lg:w-[300px] max-lg:h-[200px] max-md:w-[400px]"
                        />
                    </div>
                </div>
                
            </div>
    )
}