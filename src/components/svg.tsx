const Search = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.688 22.478">
    <g id="loope" transform="translate(-847.113 872.495) rotate(-45)">
      <g
        id="Ellipse_4"
        data-name="Ellipse 4"
        transform="translate(1208 -10)"
        fill="none"
        stroke="#000"
        strokeWidth="2"
      >
        <circle cx="7.947" cy="7.947" r="7.947" stroke="none"></circle>
        <circle cx="7.947" cy="7.947" r="6.947" fill="none"></circle>
      </g>
      <line
        id="Line_304"
        data-name="Line 304"
        y2="6.812"
        transform="translate(1216.231 5.043)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
      ></line>
    </g>
  </svg>
)

const Exit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.707 30.705">
    <path
      id="close"
      d="M-11425-3541l-15,15,15-15-15-15,15,15,15-15-15,15,15,15Z"
      transform="translate(11440.354 3556.353)"
      fill="none"
      stroke="#535851"
      strokeLinecap="round"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    ></path>
  </svg>
)

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="63.399"
    height="12.06"
    viewBox="0 0 63.399 12.06"
  >
    <g id="long_arrow" data-name="long arrow" transform="translate(0 0.4)">
      <path
        id="Path_1061"
        data-name="Path 1061"
        d="M0,0H61.443"
        transform="translate(0 5.63)"
        fill="none"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        id="Path_1061-2"
        data-name="Path 1061"
        d="M0,0,7.288,1.045"
        transform="translate(57.845 0) rotate(45)"
        fill="none"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        id="Path_1061-3"
        data-name="Path 1061"
        d="M0,1.045,7.288,0"
        transform="translate(62.998 6.106) rotate(135)"
        fill="none"
        stroke="#000"
        strokeWidth="1"
      />
    </g>
  </svg>
)

const Cart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="black"
      d="M18.1,22.5c-1.5,0-2.6-1.2-2.6-2.6c0-0.3,0-0.6,0.2-0.9l0-0.1H9.5l0,0.1c0.1,0.3,0.2,0.6,0.2,0.9 c0,1.4-1.2,2.6-2.6,2.6c-1.5,0-2.6-1.2-2.6-2.6c0-0.3,0-0.6,0.2-0.9l0-0.1H4.5l-0.1,0c-1.3-0.1-2.3-1.3-2.3-2.6s1-2.4,2.3-2.6l0.1,0 V3.1H0.9V1.5h5.2V4l16.3,1.2c0.2,0,0.5,0.1,0.6,0.3c0.1,0.2,0.2,0.4,0.1,0.7l-2.4,8.5c-0.1,0.3-0.4,0.6-0.8,0.6H4.7 c-0.6,0-1,0.5-1,1s0.5,1,1,1h13.6l0.1,0c1.3,0.1,2.3,1.3,2.3,2.6C20.7,21.3,19.5,22.5,18.1,22.5z M18.1,18.9c-0.6,0-1,0.5-1,1 s0.5,1,1,1s1-0.5,1-1S18.6,18.9,18.1,18.9z M7.1,18.9c-0.6,0-1,0.5-1,1s0.5,1,1,1s1-0.5,1-1S7.7,18.9,7.1,18.9z M6.1,13.6h13.2l2-7 L6.1,5.6V13.6z"
    ></path>
  </svg>
)

const Delete = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z" />
  </svg>
)

const Edit = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
  </svg>
)

export { Search, Exit, Arrow, Cart, Delete, Edit }
