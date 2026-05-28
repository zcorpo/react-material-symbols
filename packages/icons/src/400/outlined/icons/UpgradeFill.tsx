import type { SVGProps, JSX } from 'react'

export default function UpgradeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-160v-60h400v60H280Zm170-170v-356L329-565l-42-42 193-193 193 193-42 42-121-121v356h-60Z" />
    </svg>
  )
}
