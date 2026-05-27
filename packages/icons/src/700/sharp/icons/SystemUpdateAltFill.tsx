import type { SVGProps } from 'react'

export default function SystemUpdateAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h318v95H149v502h662v-502H587v-95h319v691H55Zm425-185L256-544l67-67 110 109v-324h94v324l110-109 67 67-224 224Z" />
    </svg>
  )
}
