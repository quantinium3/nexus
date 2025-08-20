"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AccountFormProps {
  user: {
    id: string
    name: string
    email: string
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    image?: string | null
  }
}

export function AccountForm({ user }: AccountFormProps) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Account updated:", formData)
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-8">Account</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details and email preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="account-name">Name</Label>
                  <Input
                    id="account-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="account-email">Email</Label>
                  <Input
                    id="account-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${user.emailVerified ? "bg-green-500" : "bg-yellow-500"}`} />
                    <span className="text-sm text-muted-foreground">
                      {user.emailVerified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                </div>

                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Update account
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                Delete account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
