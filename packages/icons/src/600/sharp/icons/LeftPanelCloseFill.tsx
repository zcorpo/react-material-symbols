import type { SVGProps } from 'react'

export default function LeftPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M675.44-331v-298L525.87-480l149.57 149ZM403.39-185.09h371.52v-589.82H403.39v589.82Zm-297.52 79.22V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
