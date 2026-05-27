import type { SVGProps } from 'react'

export default function VoiceChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M256.92-544.62h26.16v-30.76h-26.16v30.76Zm100 80h26.16v-190.76h-26.16v190.76Zm110 80h26.16v-350.76h-26.16v350.76Zm110-80h26.16v-190.76h-26.16v190.76Zm100-80h26.16v-30.76h-26.16v30.76ZM120-156.92V-840h720v560H243.08L120-156.92Z" />
    </svg>
  )
}
