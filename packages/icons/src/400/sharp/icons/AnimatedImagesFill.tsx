import type { SVGProps } from 'react'

export default function AnimatedImagesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m490-439 212-141-212-141v282ZM154-74 74-691l124-14v507h608l9 45-661 79Zm104-184v-622h622v622H258Z" />
    </svg>
  )
}
