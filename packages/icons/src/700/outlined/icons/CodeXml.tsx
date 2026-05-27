import type { SVGProps } from 'react'

export default function CodeXml({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-269 29-480l211-211 67 67-143 144 143 144-67 67Zm183 130-91-29 206-653 90 28-205 654Zm297-130-67-67 143-144-143-144 67-67 211 211-211 211Z" />
    </svg>
  )
}
