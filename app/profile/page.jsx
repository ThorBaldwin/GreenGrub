"use client"

import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "/components/ui/button"

import { cn } from "@/lib/utils"
import { UserAuthForm } from "@/components/user-auth-form"

export default function AuthenticationPage() {
  return (
    <>

      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 animate-text bg-gradient-to-r from-lime-400 via-green-600 to-lime-400" />
        </div>
        <div className="lg:p-8">
        <Link href={"/"}>
            <Image
            className="absolute left-4 top-4 md:left-8 md:top-8"
            src="/earth.svg" width={40} height={40} alt="/" />

            </Link>
          <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-4xl font-black tracking-tight">
                Create an account
              </h1>
              <p className="text-md text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />

          </div>
        </div>
      </div>
    </>
  )
}
