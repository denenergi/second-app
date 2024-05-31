'use client'

import { FC } from "react"
import { IMenuItem } from "./menu.interface"
import Link from "next/link"
import cn from 'clsx'
import { usePathname } from "next/navigation"

interface INaveItem {
  item: IMenuItem
}

const NaveItem: FC<INaveItem> = ({ item }) => {
  const pathname = usePathname()
  return (
    <Link
      href={item.link}
      className={cn('text-base font-medium transition duration-100 hover:text-violet-600', pathname === item.link ? "text-violet-600" : 'text-gray-600')}>
      {item.name}
    </Link>
  )
}

export default NaveItem