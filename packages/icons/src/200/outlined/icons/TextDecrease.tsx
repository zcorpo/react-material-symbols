import type { SVGProps } from 'react'

export default function TextDecrease({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m64.62-220 216.15-520H310l216.15 520h-38.84l-60.08-148.46h-266L100.38-220H64.62Zm108.3-179.38h241.85L297.38-689.62h-5.53L172.92-399.38ZM620-464.62v-30.76h275.38v30.76H620Z" />
    </svg>
  )
}
