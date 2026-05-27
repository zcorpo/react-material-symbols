import type { SVGProps } from 'react'

export default function KeyboardOptionKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m601.23-210-277-494.62H140V-750h209.77l277 494.62H820V-210H601.23Zm16.08-494.62V-750H820v45.38H617.31Z" />
    </svg>
  )
}
