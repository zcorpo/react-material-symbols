import type { SVGProps, JSX } from 'react'

export default function TextureFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97-96v-70l700-698h66v69L163-96H97Zm-2-254v-136l379-380h136L95-350Zm0-324v-192h191L95-674ZM674-95l192-191v191H674Zm-324 0 516-515v136L486-95H350Z" />
    </svg>
  )
}
