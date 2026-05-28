import type { SVGProps, JSX } from 'react'

export default function LabelImportantFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m132-212 215.23-268L132-749h453q12.25 0 23.5 4.87 11.25 4.88 18.5 15.13l201 249-199 248q-8.25 10.25-19 15.12-10.75 4.88-24 4.88H132Z" />
    </svg>
  )
}
