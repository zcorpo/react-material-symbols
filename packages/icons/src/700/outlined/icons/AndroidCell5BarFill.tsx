import type { SVGProps } from 'react'

export default function AndroidCell5BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-135v-264h130v264H10Zm203 0v-349h130v349H213Zm202 0v-478h130v478H415Zm203 0v-562h130v562H618Zm202 0v-691h130v691H820Z" />
    </svg>
  )
}
