import type { SVGProps, JSX } from 'react'

export default function SosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-280v-400h280v400H340Zm-300 0v-60h180v-110H40v-230h240v60H100v110h180v230H40Zm640 0v-60h180v-110H680v-230h240v60H740v110h180v230H680Zm-280-60h160v-280H400v280Z" />
    </svg>
  )
}
