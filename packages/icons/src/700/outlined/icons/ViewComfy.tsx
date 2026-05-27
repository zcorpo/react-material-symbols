import type { SVGProps } from 'react'

export default function ViewComfy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm756-375v-221H149v221h662ZM385-229h426v-221H385v221Zm-236 0h176v-221H149v221Z" />
    </svg>
  )
}
