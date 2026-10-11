import { ClerkProvider, Show, SignInButton, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="flex justify-between p-4">
            <h1>Coffex Inc.</h1>
            <Show when="signed-out">
              <SignInButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}