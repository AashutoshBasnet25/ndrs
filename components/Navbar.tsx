'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useAuth } from "@/contexts/auth-context";
import {
  ArrowUp,
  AlertCircle,
  Home,
  Map,
  Package,
  Shield,
  Menu,
  X,
  // Search,
  Lock,
  User,
  Palette,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
  { href: "/incidents", label: "Incidents", icon: <AlertCircle className="h-5 w-5" /> },
  { href: "/resources", label: "Resources", icon: <Package className="h-5 w-5" /> },
  { href: "/response", label: "Response", icon: <Shield className="h-5 w-5" /> },
  { href: "/alerts", label: "Alerts", icon: <Map className="h-5 w-5" /> },
];

const themes = [
  { name: "Light", value: "light" },
  { name: "Nepali", value: "nepali" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoggedIn, logout } = useAuth();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const handleLogout = () => {
    logout();
    setIsAccountOpen(false);
  };

  // Effect to handle window resize and determine if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for `lg` in Tailwind
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to get main element
  useEffect(() => {
    mainRef.current = document.querySelector('main');
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        {/* Add your navbar content here */}
      </nav>
    </>
  );
}