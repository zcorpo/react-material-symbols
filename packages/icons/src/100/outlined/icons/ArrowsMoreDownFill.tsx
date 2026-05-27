import type { SVGProps } from 'react'

export default function ArrowsMoreDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-172v-382h22v360h360v22H252Zm154-153v-382h22v360h360v22H406Z" />
    </svg>
  )
}
