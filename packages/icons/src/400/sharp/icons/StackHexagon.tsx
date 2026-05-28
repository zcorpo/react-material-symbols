import type { SVGProps, JSX } from 'react'

export default function StackHexagon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m569-396 151-87v-172l-151-87-151 87v172l151 87Zm115 198h122l9 45-661 79-80-617 125-14v61l-58 6 65 498 478-58Zm-426-60v-622h622v622H258Zm60-60h502v-502H318v502ZM206-140Zm363-429Zm0 104-91-53v-102l91-53 91 53v102l-91 53Z" />
    </svg>
  )
}
