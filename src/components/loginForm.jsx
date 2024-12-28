

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Logo from './logo'
// import { Icons } from "@/components/icons"

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            const formData = new FormData(event.currentTarget)
            const email = formData.get('email')
            const password = formData.get('password')

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Add your authentication logic here
            console.log('Login attempt:', { email, password })

        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="w-full rounded-none  max-w-lg mx-auto bg-black bg-opacity-70 border-none shadow-lg text-white">
            <CardHeader className="space-y-0">
                <Logo />

            </CardHeader>
            <form onSubmit={onSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Utilizador</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    {error && (
                        <div className="text-sm text-red-500" role="alert">
                            {error}
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button className="w-full rounded-none bg-blue-950 hover:bg-blue-900 h-12" disabled={isLoading}>
                        {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                        Sign in
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

