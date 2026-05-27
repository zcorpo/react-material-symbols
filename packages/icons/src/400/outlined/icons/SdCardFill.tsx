import type { SVGProps, JSX } from 'react'

export default function SdCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm163-448h60v-157h-60v157Zm119 0h60v-157h-60v157Zm119 0h60v-157h-60v157Z" />
    </svg>
  )
}
