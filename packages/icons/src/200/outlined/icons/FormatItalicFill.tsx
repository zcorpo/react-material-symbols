import type { SVGProps, JSX } from 'react'

export default function FormatItalicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M242.46-229.77v-35.38h133.23L523.92-698H378.77v-35.38h323.08V-698H564L416.54-265.15h149v35.38H242.46Z" />
    </svg>
  )
}
