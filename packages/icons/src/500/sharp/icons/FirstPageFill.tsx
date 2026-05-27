import type { SVGProps } from 'react'

export default function FirstPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235.93-234.26v-491.48h68.14v491.48h-68.14Zm451.07-3L447.26-477 687-716.74 735.74-668l-191 191 191 191L687-237.26Z" />
    </svg>
  )
}
