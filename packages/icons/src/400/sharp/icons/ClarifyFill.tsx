import type { SVGProps } from 'react'

export default function ClarifyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-300h260v-60H260v60Zm380 0h60v-360h-60v360ZM260-450h260v-60H260v60Zm0-150h260v-60H260v60ZM72-120v-720h816v720H72Z" />
    </svg>
  )
}
