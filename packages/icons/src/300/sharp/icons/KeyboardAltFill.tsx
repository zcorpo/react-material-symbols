import type { SVGProps } from 'react'

export default function KeyboardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-180v-600h840v600H60Zm278.15-113.23h283.7v-56.16h-283.7v56.16ZM213.62-432.08h56.15v-56.15h-56.15v56.15Zm158.61 0h56.15v-56.15h-56.15v56.15Zm159.39 0h56.15v-56.15h-56.15v56.15Zm158.61 0h56.15v-56.15h-56.15v56.15ZM213.62-570.54h56.15v-56.15h-56.15v56.15Zm158.61 0h56.15v-56.15h-56.15v56.15Zm159.39 0h56.15v-56.15h-56.15v56.15Zm156.69 1.93h56.15v-56.16h-56.15v56.16Z" />
    </svg>
  )
}
