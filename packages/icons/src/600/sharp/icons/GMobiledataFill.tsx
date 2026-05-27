import type { SVGProps } from 'react'

export default function GMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M274.91-280v-400h365.61v73H347.91v254h224.18v-91.35h-141v-66.78h213.43V-280H274.91Z" />
    </svg>
  )
}
