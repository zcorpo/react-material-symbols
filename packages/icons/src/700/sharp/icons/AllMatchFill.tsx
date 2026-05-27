import type { SVGProps } from 'react'

export default function AllMatchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-135 254-345L55-826h597l254 346-38 52q-32-23-68.9-35-36.9-12-75.1-12-102 0-176.5 73.5T464-228q-3 23.9 0 47.45Q467-157 474-135H55ZM724-11q-83 0-142.5-59.5T522-212q0-83 59.5-143T724-415q82 0 142 60t60 143q0 82-60 141.5T724-11Zm-29-101 150-149-53-52-97 95-39-39-52 53 91 92Z" />
    </svg>
  )
}
