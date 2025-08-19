import SignUp from "@/components/sign-up";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#1F1E25]">
            <div className="relative hidden lg:block lg:w-3/5 xl:w-2/3">
                <div className="absolute top-6 left-6 z-10 text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-br from-[#F75A6A] to-[#f0f0f0] bg-clip-text text-transparent">
                    Nexus
                </div>
                <Image
                    src="/signin.png"
                    alt="Sign in"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 60vw, 66vw"
                />
            </div>

            <div className="flex w-full lg:w-2/5 xl:w-1/3 items-center justify-center bg-[#1F1E25] text-white">
                <div className="w-full max-w-md mx-auto px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-6 xl:px-8">
                    <div className="lg:hidden text-center mb-8">
                        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#F75A6A] to-[#f0f0f0] bg-clip-text text-transparent">
                            Nexus
                        </div>
                    </div>
                    
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                        Sign Up
                    </h1>
                    
                    <SignUp />
                    
                    <div className="mt-6 text-center text-sm sm:text-base text-zinc-400">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-[#F75A6A] hover:text-[#f0f0f0] transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
