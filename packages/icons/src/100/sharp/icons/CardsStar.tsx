import type { SVGProps, JSX } from 'react'

export default function CardsStar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m492-473 73-44 73 44-20-83 65-56-85-7-33-78-33 78-85 7 65 56-20 83Zm283 246h-18l3 24-564 71-66-501 98-9v23l-71 6 57 456 561-70Zm-474-74v-527h527v527H301Zm22-22h483v-483H323v483ZM214-157Zm351-408Z" />
    </svg>
  )
}
