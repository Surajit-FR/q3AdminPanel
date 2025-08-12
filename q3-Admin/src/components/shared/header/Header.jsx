import React from 'react'

const Header = ({heading, subHeading}) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24 fr_12">
      <h6 className="fw-semibold mb-0">{heading}</h6>
      <ul className="d-flex align-items-center gap-2">
        <li className="fw-medium">
          <a href="index.html" className="d-flex align-items-center gap-1 hover-text-primary">
            <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg"></iconify-icon>
            {heading}
          </a>
        </li>
        <li>-</li>
        <li className="fw-medium">{subHeading}</li>
      </ul>
    </div>
  )
}

export default Header
