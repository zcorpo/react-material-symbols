import type { SVGProps } from 'react'

export default function FlightClassFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M512-492v-256h156v256H512Zm156 200H352L252-638v-110h22v104l96 330h298v22ZM341-172v-22h326v22H341Z" />
    </svg>
  )
}
