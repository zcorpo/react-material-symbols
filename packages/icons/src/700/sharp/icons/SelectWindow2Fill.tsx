import type { SVGProps } from 'react'

export default function SelectWindow2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M811-349v-332H222v-225h684v557h-95ZM55-55v-566h697v566H55Z" />
    </svg>
  )
}
