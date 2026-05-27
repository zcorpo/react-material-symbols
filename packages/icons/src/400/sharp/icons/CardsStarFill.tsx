import type { SVGProps, JSX } from 'react'

export default function CardsStarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m478-449 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM154-74 74-691l124-14v507h608l9 45-661 79Zm104-184v-622h622v622H258Z" />
    </svg>
  )
}
