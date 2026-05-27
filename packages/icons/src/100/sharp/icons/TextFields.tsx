import type { SVGProps, JSX } from 'react'

export default function TextFields({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M329-206v-526H126v-22h428v22H351v526h-22Zm360 0v-326H566v-22h268v22H711v326h-22Z" />
    </svg>
  )
}
