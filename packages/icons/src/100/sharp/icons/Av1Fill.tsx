import type { SVGProps, JSX } from 'react'

export default function Av1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-375h25v-72h106v72h25v-210H220v210Zm25-97v-88h106v88H245Zm248.15 97H536l61-210h-27l-55 194-55-194h-27l60.15 210ZM715-375h25v-210h-80v25h55v185ZM92-212v-536h776v536H92Z" />
    </svg>
  )
}
