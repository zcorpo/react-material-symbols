import type { SVGProps } from 'react'

export default function Medication({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-264.93h79v-111h114v-80H519v-111h-79v111H327v80h113v111ZM191.87-107.56v-615.51h576.5v615.51h-576.5ZM260-175.93h440v-479H260v479Zm-25.5-608.14v-68.37h492v68.37h-492ZM260-654.93v479-479Z" />
    </svg>
  )
}
