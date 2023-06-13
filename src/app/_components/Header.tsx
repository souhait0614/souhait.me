"use client"

import * as styles from "./Header.css"

import { Home, Packages, Snowflake, Star } from "tabler-icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import type { Icon } from "tabler-icons-react"

export interface Page {
  label: string
  path: string
  icon: Icon
  hide?: boolean
}

export const pageList: Page[] = [
  {
    label: "ホーム",
    path: "/",
    icon: Home,
  },
  {
    label: "すえちゃん",
    path: "/souhait-chan",
    icon: Star,
  },
  {
    label: "作ったもの",
    path: "/product",
    icon: Packages,
  },
  {
    label: "ギャグ",
    path: "/gyagu",
    icon: Snowflake,
    hide: true,
  },
]

const Header = () => {
  const pathname = usePathname()
  const [category = ""] = pathname.split("/").filter((val) => val)
  const hidePage = pageList.filter(({ hide }) => hide).find(({ path }) => pathname === path)
  return (
    <header>
      <nav>
        <ul className={styles.container}>
          {pageList
            .filter(({ hide }) => !hide)
            .map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <Link href={path}>
                  <div className={styles.pageLink[`/${category}` === path ? "selected" : "normal"]}>
                    <Icon size={16} className={styles.pageLinkIcon} />
                    <div>{label}</div>
                  </div>
                </Link>
              </li>
            ))}
          {hidePage && (
            <li key={hidePage.path}>
              <Link href={hidePage.path}>
                <div className={styles.pageLink["selected"]}>
                  <hidePage.icon size={16} className={styles.pageLinkIcon} />
                  <div>{hidePage.label}</div>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
