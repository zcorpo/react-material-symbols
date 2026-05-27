import type { SVGProps } from 'react'

export default function Gif2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-300v-360h265.92v30.77H150.77v298.46h210v-133.85h-87.69v-30.76h118.46V-300H120Zm398.85 0v-360h30.77v360h-30.77Zm157.3 0v-360h240v30.77H706.92v138.46h169.23V-460H706.92v160h-30.77Z" />
    </svg>
  )
}
