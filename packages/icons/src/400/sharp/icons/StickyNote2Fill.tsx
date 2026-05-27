import type { SVGProps } from 'react'

export default function StickyNote2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M780-380H580v200l200-200ZM120-120v-720h720v480L600-120H120Zm180-300h170v-60H300v60Zm0-160h360v-60H300v60Z" />
    </svg>
  )
}
