import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4 gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/nepal-gov-logo.png"
            alt="Government of Nepal Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold">Nepal Disaster Response System</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Government of Nepal. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
