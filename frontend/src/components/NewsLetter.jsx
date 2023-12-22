
function NewsLetter() {
  return (
    <div className="continer mx-auto bg-gray-500 items-center p-8">

        <div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between ">
                <div>
                    <h2 className="text-3xl text-white font-semibold leading-normal">NEWSLETTER</h2>
                    <span className="text-base text-white leading-normal text-xl">Sign up for our newsletter and follow us on social media</span>
                </div>
                <div className=" w-full ">
                    <form className="my-5 flex gap-4">
                        <input className="border-none p-8 w-[70%]" placeholder="enter your mail" type='email' name='email'/>
                        <button className="p-2 text-xl bg-blue-500 text-white w-80 font-semibold">SUBSCRIBE</button>
                    </form>

                </div>



            </div>
        </div>

    </div>
  )
}

export default NewsLetter