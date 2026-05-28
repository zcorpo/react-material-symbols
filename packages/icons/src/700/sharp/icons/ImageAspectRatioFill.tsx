import type { SVGProps, JSX } from 'react'

export default function ImageAspectRatioFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M239-497h71v-71h-71v71Zm170 0h71v-71h-71v71Zm168 175h71v-71h-71v71Zm0-175h71v-71h-71v71ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
