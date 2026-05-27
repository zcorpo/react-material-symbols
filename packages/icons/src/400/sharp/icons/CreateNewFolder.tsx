import type { SVGProps, JSX } from 'react'

export default function CreateNewFolder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm60-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Zm410-100h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z" />
    </svg>
  )
}
