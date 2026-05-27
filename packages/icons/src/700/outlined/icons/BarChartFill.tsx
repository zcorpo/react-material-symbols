import type { SVGProps, JSX } from 'react'

export default function BarChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M662-135v-316h164v316H662Zm-263 0v-691h162v691H399Zm-264 0v-491h163v491H135Z" />
    </svg>
  )
}
