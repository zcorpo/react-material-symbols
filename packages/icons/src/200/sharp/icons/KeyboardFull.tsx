import type { SVGProps } from 'react'

export default function KeyboardFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h720v560H120Zm30.77-190.77h658.46v-338.46H150.77v338.46Z" />
    </svg>
  )
}
