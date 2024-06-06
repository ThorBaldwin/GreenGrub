"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


//         loading code when signing in 
//            disabled={isLoading}>
    //          {isLoading && (
   //             <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
     //         )}



export function SignInAuth({ className, ...props }) {
    const [isLoading, setIsLoading] = useState(false)
  
    async function onSubmit(event) {
      event.preventDefault()
      setIsLoading(true)
  
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  
    return (
      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Your password"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Button
            className="mt-4">

              Sign In with Email
            </Button>
          </div>
        </form>
  
      </div>
    )
  }