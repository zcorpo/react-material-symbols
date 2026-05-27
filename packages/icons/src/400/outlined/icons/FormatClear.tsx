import type { SVGProps } from 'react'

export default function FormatClear({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m507-524-77-76 24-56h-79L271-760h529v100H565l-58 136ZM806-56 457-406l-88 206H260l120-282L56-806l42-42L848-98l-42 42Z" />
    </svg>
  )
}
