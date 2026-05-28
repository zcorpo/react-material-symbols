import type { SVGProps, JSX } from 'react'

export default function Emergency({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M401-119v-224L207-231l-80-136 196-113-195-112 79-136 194 112v-225h158v225l194-112 79 136-194 112 195 113-80 136-194-112v224H401Z" />
    </svg>
  )
}
