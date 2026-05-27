import type { SVGProps } from 'react'

export default function ViewArray({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h100v560H120Zm160 0v-560h400v560H280Zm460 0v-560h100v560H740Zm-400-60h280v-440H340v440Zm140-220Z" />
    </svg>
  )
}
