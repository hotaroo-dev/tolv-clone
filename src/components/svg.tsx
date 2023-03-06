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
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M240 976q-33 0-56.5-23.5T160 896V416q0-33 23.5-56.5T240 336h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800 416v480q0 33-23.5 56.5T720 976H240Zm0-80h480V416h-80v80q0 17-11.5 28.5T600 536q-17 0-28.5-11.5T560 496v-80H400v80q0 17-11.5 28.5T360 536q-17 0-28.5-11.5T320 496v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480 256q-33 0-56.5 23.5T400 336ZM240 896V416v480Z" />
  </svg>
)

export { Search, Exit, Arrow, Cart }
