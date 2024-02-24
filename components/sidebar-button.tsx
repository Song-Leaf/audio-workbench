"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  link: string
  icon: React.ReactNode
}

export function SidebarButton({ className, title, link, icon }: SidebarProps) {
  const pathname = usePathname()
  return (
    <Button
      variant={pathname === link ? "secondary" : "ghost"}
      className="w-full justify-start"
      asChild
    >
      <Link href={link}>
        {icon}
        <p className="pt-0.5">{title}</p>
      </Link>
    </Button>
  )
}
