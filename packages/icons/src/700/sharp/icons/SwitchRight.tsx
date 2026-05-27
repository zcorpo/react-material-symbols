import type { SVGProps } from 'react'

export default function SwitchRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M406-127 53-480l353-353v706Zm148 0v-706l354 353-354 353Zm102-244 108-109-108-109v218Z" />
    </svg>
  )
}
