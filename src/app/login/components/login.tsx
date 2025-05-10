// pages/login.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white p-8 w-full max-w-md">
             <div className="mb-8">
                <h1 className="text-2xl text-black font-semibold tracking-tight leading-7">Think it. Make it.</h1>
                <h1 className="text-2xl font-semibold text-[#46444073] tracking-tight leading-7">Log in to your Notion account</h1>
             </div>
             <div className="mb-6">
                <div className="h-9 border-[#54483126] border-2 mb-2 rounded-md  w-full" role="button">
                    <div className="flex">
                    <div className="w-1/5">
                    <Image
                        src="/login/google.jpeg"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mt-1.5 ml-3"
                    />
                    </div>
                    <div className="text-sm w-4/5 text-center mt-1.5 font-bold  text-[#32302c] ">Continue with Google</div>
                    </div>
                </div>

                <div className="h-9 border-[#54483126] border-2 mb-2 rounded-md  w-full" role="button">
                    <div className="flex">
                    <div className="w-1/5">
                    <Image
                        src="/login/apple.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mt-1.5 ml-3"
                    />
                    </div>
                    <div className="text-sm w-4/5 text-center mt-1.5 font-bold  text-[#32302c] ">Continue Apple</div>
                    </div>
                </div>

                <div className="h-9 border-[#54483126] border-2 mb-2 rounded-md  w-full" role="button">
                    <div className="flex">
                    <div className="w-1/5">
                    <Image
                        src="/login/microsoft.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mt-1.5 ml-3"
                    />
                    </div>
                    <div className="text-sm w-4/5 text-center mt-1.5 font-bold  text-[#32302c] ">Continue with Microsort</div>
                    </div>
                </div>

                <div className="h-9 border-[#54483126] border-2 mb-2 rounded-md  w-full" role="button">
                    <div className="flex">
                    <div className="w-1/5">
                    <Image
                        src="/login/passkey.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mt-1.5 ml-3"
                    />
                    </div>
                    <div className="text-sm w-4/5 text-center mt-1.5 font-bold  text-[#32302c] ">Login with passkey</div>
                    </div>
                </div>

                <div className="h-9 border-[#54483126] border-2 mb-2 rounded-md  w-full" role="button">
                    <div className="flex">
                    <div className="w-1/5">
                    <Image
                        src="/login/(sso).png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mt-1.5 ml-3"
                    />
                    </div>
                    <div className="text-sm w-4/5 text-center mt-1.5 font-bold  text-[#32302c] ">Single sign-on (SSO)</div>
                    </div>
                </div>
                </div>
          <form className="space-y-4 mb-6">
            <div>
                <div className="border-b-2 border-[#54483126] mb-8"></div>
              <label htmlFor="email" className="block text-[12px] font-medium text-[#787774]">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address..."
                className="mt-1 block w-full px-4 py-2 border-2 font-medium border-[#54483126] text-black rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <div className="text-[#46444073] text-xs mt-4 mb-5 text-left leading-4">
                Use an organization email to easily collaborate with teammates
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#2383e2] text-sm font-medium text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                  <Link
                    className="w-full bg-[#2383e2] text-sm font-medium text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200" 
                    href="/pages">
                    Continue
                  </Link>                
              </button>
            </div>
          </form>

          <div>
            <p className="text-xs leading-4 text-[#46444073] text-center">
                By continuing, you acknowledge that you understand and agree to the 
                <a href="">Terms & Conditions</a>
                and 
                <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
