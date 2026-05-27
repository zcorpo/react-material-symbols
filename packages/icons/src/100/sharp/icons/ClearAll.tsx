import type { SVGProps } from 'react'

export default function ClearAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-338v-22h469v22H172Zm73-131v-22h469v22H245Zm74-131v-22h469v22H319Z" />
    </svg>
  )
}
