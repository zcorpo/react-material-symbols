import type { SVGProps } from 'react'

export default function TextAdOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m826-45-89-90H55v-688h93l92 92H139L22-848l51-51L876-96l-50 51ZM219-299h353l-60-60H219v60Zm0-151h201l-60-60H219v60Zm0-151h50l-60-60h10v60Zm29-225h658v658L623-450h118v-60H563l-91-91h107v-60H412L248-826Z" />
    </svg>
  )
}
