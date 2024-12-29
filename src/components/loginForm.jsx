

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Logo from './logo'
import { useLogin } from '@/hooks/useLogin'
// import { Icons } from "@/components/icons"

export default function LoginForm() {
    const { onSubmit,
        isLoading,
        showPassword,
        togglePasswordVisibility,
        error
    } = useLogin()
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
                        <div className="relative">
                            <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                disabled={isLoading}
                                placeholder="********"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-2 text-gray-600"
                            >
                                {showPassword ? (
                                    <span role="img" aria-label="hide-password">👁️</span>
                                ) : (
                                    <span role="img" aria-label="show-password">🙈</span>
                                )}
                            </button>
                        </div>
                    </div>
                    {error && (
                        <div className="text-sm text-red-500" role="alert">
                            {error}
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button className="w-full rounded-none bg-blue-950 hover:bg-blue-900 h-12" disabled={isLoading}>
                        {isLoading && (
                            <svg
                                className="mr-2 h-5 w-5 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                ></circle>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="4"
                                    d="M4 12a8 8 0 018-8v4l4-4-4-4v4a4 4 0 00-4 4h4"
                                ></path>
                            </svg>
                        )}
                        Sign in
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

