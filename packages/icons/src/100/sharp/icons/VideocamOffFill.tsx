import type { SVGProps } from 'react'

export default function VideocamOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M806-355 696-465v104L309-748h387v252l110-110v251Zm-36 205L122-798l16-16 648 648-16 16ZM206-746l488 488v46H160v-534h46Z" />
    </svg>
  )
}
