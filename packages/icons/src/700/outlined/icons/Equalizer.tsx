import type { SVGProps } from 'react'

export default function Equalizer({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-135v-356h163v356H135Zm264 0v-691h162v691H399Zm263 0v-491h164v491H662Z" />
    </svg>
  )
}
