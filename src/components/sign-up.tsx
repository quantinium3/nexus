"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.email("Invalid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  username: z.string().min(3, "Username must be at least 3 characters."),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await authClient.signUp.email({
      email: values.email,
      password: values.password,
      name: values.username,
      callbackURL: "/dashboard",
    }, {
      onRequest: (ctx) => {
        console.log("loading...");
      },
      onSuccess: (ctx) => {
        console.log("successfully logged in", ctx);
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    });
    if (error) {
      console.error("Failed to Sign In user: ", error);
    }
  }

  async function handleGithubSignUp(e: MouseEvent) {
    e.preventDefault();
    await authClient.signUp.({
      provider: "github",
      callbackURL: "/dashboard",
    });
  }
  return (
    <div className="w-full">
      <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-row sm:gap-3 mb-6 pb-6 border-b border-zinc-700">
        <button className="w-full sm:flex-1 border border-zinc-600 p-3 sm:p-2.5 md:p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors duration-200 text-sm sm:text-base">
          <FaGithub size={18} className="sm:w-5 sm:h-5" />
          <span>Github</span>
        </button>
        <Link
          className="w-full sm:flex-1 border border-zinc-600 p-3 sm:p-2.5 md:p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors duration-200 text-sm sm:text-base"
          href="/api/auth/callback/google"
        >
          <FaGoogle size={18} className="sm:w-5 sm:h-5" />
          <span>Google</span>
        </Link>
        <Link
          className="w-full sm:flex-1 border border-zinc-600 p-3 sm:p-2.5 md:p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors duration-200 text-sm sm:text-base"
          href="/api/auth/callback/twitter"
        >
          <FaTwitter size={18} className="sm:w-5 sm:h-5" />
          <span>Twitter(X)</span>
        </Link>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base md:text-lg font-medium">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full h-11 sm:h-12 text-sm sm:text-base px-3 sm:px-4 border-zinc-600 focus:border-zinc-400 bg-zinc-800/50"
                    placeholder="Enter username"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base md:text-lg font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="w-full h-11 sm:h-12 text-sm sm:text-base px-3 sm:px-4 border-zinc-600 focus:border-zinc-400 bg-zinc-800/50"
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base md:text-lg font-medium">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="w-full h-11 sm:h-12 text-sm sm:text-base px-3 sm:px-4 border-zinc-600 focus:border-zinc-400 bg-zinc-800/50"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-11 sm:h-12 md:h-13 bg-zinc-300 text-black hover:bg-zinc-200 active:bg-zinc-400 transition-colors duration-200 text-sm sm:text-base md:text-lg font-medium mt-6"
          >
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
