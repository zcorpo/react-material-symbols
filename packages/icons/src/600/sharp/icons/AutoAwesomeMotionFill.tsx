import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMotionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307-54v-599h599v599H307ZM180.78-179.78v-600h599.44V-700H260v520.22h-79.22ZM54-299.78V-906h606.22v79.78H133.78v526.44H54Z" />
    </svg>
  )
}
