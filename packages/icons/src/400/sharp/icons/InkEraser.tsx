import type { SVGProps } from 'react'

export default function InkEraser({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M678-220h203v60H618l60-60Zm-499 60L58-285l537-584 288 302-380 407H179Zm301-60 324-352-207-217-455 503 64 66h274Zm0-260Z" />
    </svg>
  )
}
