import type { SVGProps } from 'react'

export default function Tab({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M142.15-222.15h675.7V-567H524v-170.85H142.15v515.7Zm-68.13 68.13v-652.2h812.2v652.2H74.02Zm68.13-68.13v-515.7 515.7Z" />
    </svg>
  )
}
