import { useEffect, useState } from 'react';

export const Cinema = ({
  ticketsSold,
  selectedTickets,
  handleTicket,
  sizeRoom,
  countPurchasedSeats,
  countSelectedSeats,
}) => {
  const [state, setState] = useState(false);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="637"
        height="467"
        viewBox="0 0 637 467"
      >
        <g id="cinemaroom" transform="translate(-596 -177)">
          <g id="screen" transform="translate(651.774 177)">
            <path
              id="Trazado_1"
              data-name="Trazado 1"
              d="M2650.3,231.589s246.849-29.641,522.853,0"
              transform="translate(-2650.299 -182.491)"
              fill="none"
              stroke="#f77293"
              strokeWidth="8"
            />
            <line
              id="Línea_1"
              data-name="Línea 1"
              x2="15.613"
              y2="50.31"
              transform="translate(0.174 46.406)"
              fill="none"
              stroke="#f77293"
              strokeWidth="2"
            />
            <line
              id="Línea_2"
              data-name="Línea 2"
              x1="15.116"
              y2="50.399"
              transform="translate(508.107 46.406)"
              fill="none"
              stroke="#f77898"
              strokeWidth="2"
            />
            <line
              id="Línea_3"
              data-name="Línea 3"
              x2="492.689"
              transform="translate(15.787 96.716)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.5"
            />
            <text
              id="SCREEN-2"
              data-name="SCREEN"
              transform="translate(230.226 18)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                SCREEN
              </tspan>
            </text>
          </g>
          <g id="letterSEATS" transform="translate(596 382.576)">
            <text
              id="A"
              transform="translate(0 18.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                A
              </tspan>
            </text>
            <text
              id="B"
              transform="translate(0 59.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                B
              </tspan>
            </text>
            <text
              id="C"
              transform="translate(0 100.424)"
              fill="#707070"
              fontSize="16"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                C
              </tspan>
            </text>
            <text
              id="D"
              transform="translate(624 162.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                D
              </tspan>
            </text>
            <text
              id="D-2"
              data-name="D"
              transform="translate(0 162.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                D
              </tspan>
            </text>
            <text
              id="D-3"
              data-name="D"
              transform="translate(623 101.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                D
              </tspan>
            </text>
            <text
              id="B-2"
              data-name="B"
              transform="translate(623 59.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                B
              </tspan>
            </text>
            <text
              id="A-2"
              data-name="A"
              transform="translate(623 18.424)"
              fill="#707070"
              fontSize="17"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                A
              </tspan>
            </text>
          </g>
          <g id="seatAVAILABLE" transform="translate(774.687 590)">
            <g
              id="Rectángulo_3"
              data-name="Rectángulo 3"
              transform="translate(26.313 0.089)"
              fill="#fff"
              stroke="#707070"
              strokeWidth="1"
            >
              <rect width="17" height="9" rx="3" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="16"
                height="8"
                rx="2.5"
                fill="none"
              />
            </g>
            <g
              id="Rectángulo_4"
              data-name="Rectángulo 4"
              transform="translate(26.313 12.089)"
              fill="#fff"
              stroke="#707070"
              strokeWidth="1"
            >
              <rect width="16" height="5" rx="1" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="4"
                rx="0.5"
                fill="none"
              />
            </g>
            <text
              id="AVAILABLE"
              transform="translate(0.313 46.089)"
              fill="#707070"
              fontSize="13"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                AVAILABLE
              </tspan>
            </text>
            <text
              id="_10"
              data-name="10"
              transform="translate(27.313 31.089)"
              fill="#707070"
              fontSize="13"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                {sizeRoom - (countPurchasedSeats + countSelectedSeats)}
              </tspan>
            </text>
          </g>
          <g id="seatPURCHASED" transform="translate(878.687 590)">
            <g
              id="Rectángulo_3-2"
              data-name="Rectángulo 3"
              transform="translate(30.313 0.089)"
              fill="#989898"
              stroke="#cbcbcb"
              strokeWidth="1"
            >
              <rect width="17" height="9" rx="3" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="16"
                height="8"
                rx="2.5"
                fill="none"
              />
            </g>
            <g
              id="Rectángulo_4-2"
              data-name="Rectángulo 4"
              transform="translate(31.313 12.089)"
              fill="#989898"
              stroke="#bebebe"
              strokeWidth="1"
            >
              <rect width="16" height="5" rx="1" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="4"
                rx="0.5"
                fill="none"
              />
            </g>
            <text
              id="PURCHASED"
              transform="translate(0.313 46.089)"
              fill="#707070"
              fontSize="13"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                PURCHASED
              </tspan>
            </text>
            <text
              id="_10-2"
              data-name="10"
              transform="translate(31.313 28.089)"
              fill="#707070"
              fontSize="13"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                {countPurchasedSeats}
              </tspan>
            </text>
          </g>
          <g id="seatSElECTED" transform="translate(983.733 590)">
            <g
              id="Rectángulo_3-3"
              data-name="Rectángulo 3"
              transform="translate(21.267 0.089)"
              fill="#fb7676"
              stroke="#fb7676"
              strokeWidth="1"
            >
              <rect width="18" height="9" rx="3" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="17"
                height="8"
                rx="2.5"
                fill="none"
              />
            </g>
            <g
              id="Rectángulo_4-3"
              data-name="Rectángulo 4"
              transform="translate(22.267 12.089)"
              fill="#fb7676"
              stroke="#fb7676"
              strokeWidth="1"
            >
              <rect width="16" height="5" rx="1" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="4"
                rx="0.5"
                fill="none"
              />
            </g>
            <text
              id="SELECTED"
              transform="translate(0.267 46.089)"
              fill="#707070"
              fontSize="13"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                SELECTED
              </tspan>
            </text>
            <text
              id="_10-3"
              data-name="10"
              transform="translate(23.267 29.089)"
              fill="#707070"
              fontSize="13"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                {countSelectedSeats}
              </tspan>
            </text>
          </g>
          <g id="seatsD" transform="translate(874.439 527.434)">
            <g
              id="D1"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('D1')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-4"
                data-name="Rectángulo 3"
                transform="translate(-0.439 -0.434)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D1')
                      ? '--purchased'
                      : selectedTickets.includes('D1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-4"
                data-name="Rectángulo 4"
                transform="translate(0.561 12.566)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D1')
                      ? '--purchased'
                      : selectedTickets.includes('D1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_1"
                data-name="1"
                transform="translate(6.561 24.566)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  1
                </tspan>
              </text>
            </g>
            <g
              id="D2"
              transform="translate(41.636)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('D2')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-5"
                data-name="Rectángulo 3"
                transform="translate(-0.075 -0.434)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D2')
                      ? '--purchased'
                      : selectedTickets.includes('D2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-5"
                data-name="Rectángulo 4"
                transform="translate(0.925 12.566)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D2')
                      ? '--purchased'
                      : selectedTickets.includes('D2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_2"
                data-name="2"
                transform="translate(6.925 24.566)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
            </g>
            <g
              id="D3"
              transform="translate(62.454)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('D3')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-6"
                data-name="Rectángulo 3"
                transform="translate(0.107 -0.434)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D3')
                      ? '--purchased'
                      : selectedTickets.includes('D3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-6"
                data-name="Rectángulo 4"
                transform="translate(1.107 12.566)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D3')
                      ? '--purchased'
                      : selectedTickets.includes('D3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_3"
                data-name="3"
                transform="translate(7.107 24.566)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  3
                </tspan>
              </text>
            </g>
            <g
              id="D4"
              transform="translate(83.271)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('D4')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-7"
                data-name="Rectángulo 3"
                transform="translate(0.29 -0.434)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D4')
                      ? '--purchased'
                      : selectedTickets.includes('D4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-7"
                data-name="Rectángulo 4"
                transform="translate(1.29 12.566)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('D4')
                      ? '--purchased'
                      : selectedTickets.includes('D4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_4"
                data-name="4"
                transform="translate(7.29 24.566)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  4
                </tspan>
              </text>
            </g>
          </g>
          <g id="seatsC" transform="translate(749.532 465.848)">
            <g
              id="C1"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C1')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-8"
                data-name="Rectángulo 3"
                transform="translate(0.468 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C1')
                      ? '--purchased'
                      : selectedTickets.includes('C1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-8"
                data-name="Rectángulo 4"
                transform="translate(0.468 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C1')
                      ? '--purchased'
                      : selectedTickets.includes('C1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_1-2"
                data-name="1"
                transform="translate(6.468 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  1
                </tspan>
              </text>
            </g>
            <g
              id="C2"
              transform="translate(19.95)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C2')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-9"
                data-name="Rectángulo 3"
                transform="translate(-0.482 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C2')
                      ? '--purchased'
                      : selectedTickets.includes('C2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-9"
                data-name="Rectángulo 4"
                transform="translate(0.518 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C2')
                      ? '--purchased'
                      : selectedTickets.includes('C2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_2-2"
                data-name="2"
                transform="translate(6.518 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
            </g>
            <g
              id="C3"
              transform="translate(43.371)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C3')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-10"
                data-name="Rectángulo 3"
                transform="translate(0.098 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C3')
                      ? '--purchased'
                      : selectedTickets.includes('C3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-10"
                data-name="Rectángulo 4"
                transform="translate(1.098 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C3')
                      ? '--purchased'
                      : selectedTickets.includes('C3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_3-2"
                data-name="3"
                transform="translate(7.098 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  3
                </tspan>
              </text>
            </g>
            <g
              id="C4"
              transform="translate(63.321)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C4')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-11"
                data-name="Rectángulo 3"
                transform="translate(0.147 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C4')
                      ? '--purchased'
                      : selectedTickets.includes('C4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-11"
                data-name="Rectángulo 4"
                transform="translate(1.147 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C4')
                      ? '--purchased'
                      : selectedTickets.includes('C4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_4-2"
                data-name="4"
                transform="translate(7.147 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  4
                </tspan>
              </text>
            </g>
            <g
              id="C5"
              transform="translate(104.089)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C5')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-12"
                data-name="Rectángulo 3"
                transform="translate(0.379 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C5')
                      ? '--purchased'
                      : selectedTickets.includes('C5')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-12"
                data-name="Rectángulo 4"
                transform="translate(0.379 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C5')
                      ? '--purchased'
                      : selectedTickets.includes('C5')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_5"
                data-name="5"
                transform="translate(7.379 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  5
                </tspan>
              </text>
            </g>
            <g
              id="C6"
              transform="translate(124.907)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C6')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-13"
                data-name="Rectángulo 3"
                transform="translate(-0.439 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C6')
                      ? '--purchased'
                      : selectedTickets.includes('C6')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-13"
                data-name="Rectángulo 4"
                transform="translate(0.561 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C6')
                      ? '--purchased'
                      : selectedTickets.includes('C6')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_6"
                data-name="6"
                transform="translate(6.561 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  6
                </tspan>
              </text>
            </g>
            <g
              id="C7"
              transform="translate(145.725)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C7')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-14"
                data-name="Rectángulo 3"
                transform="translate(-0.257 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C7')
                      ? '--purchased'
                      : selectedTickets.includes('C7')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-14"
                data-name="Rectángulo 4"
                transform="translate(0.743 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C7')
                      ? '--purchased'
                      : selectedTickets.includes('C7')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_7"
                data-name="7"
                transform="translate(6.743 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  7
                </tspan>
              </text>
            </g>
            <g
              id="C8"
              transform="translate(166.543)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C8')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-15"
                data-name="Rectángulo 3"
                transform="translate(-0.075 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C8')
                      ? '--purchased'
                      : selectedTickets.includes('C8')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-15"
                data-name="Rectángulo 4"
                transform="translate(0.925 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C8')
                      ? '--purchased'
                      : selectedTickets.includes('C8')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_8"
                data-name="8"
                transform="translate(6.925 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  8
                </tspan>
              </text>
            </g>
            <g
              id="C9"
              transform="translate(187.361)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C9')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-16"
                data-name="Rectángulo 3"
                transform="translate(0.107 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C9')
                      ? '--purchased'
                      : selectedTickets.includes('C9')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-16"
                data-name="Rectángulo 4"
                transform="translate(1.107 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C9')
                      ? '--purchased'
                      : selectedTickets.includes('C9')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_9"
                data-name="9"
                transform="translate(7.107 24.152)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  9
                </tspan>
              </text>
            </g>
            <g
              id="C10"
              transform="translate(208.179)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C10')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-17"
                data-name="Rectángulo 3"
                transform="translate(0.29 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C10')
                      ? '--purchased'
                      : selectedTickets.includes('C10')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-17"
                data-name="Rectángulo 4"
                transform="translate(1.29 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C10')
                      ? '--purchased'
                      : selectedTickets.includes('C10')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_10"
                data-name="10"
                transform="translate(4.29 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  10
                </tspan>
              </text>
            </g>
            <g
              id="C11"
              transform="translate(247.212)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C11')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-18"
                data-name="Rectángulo 3"
                transform="translate(0.256 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C11')
                      ? '--purchased'
                      : selectedTickets.includes('C11')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-18"
                data-name="Rectángulo 4"
                transform="translate(1.256 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C11')
                      ? '--purchased'
                      : selectedTickets.includes('C11')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_11"
                data-name="11"
                transform="translate(4.256 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  11
                </tspan>
              </text>
            </g>
            <g
              id="C12"
              transform="translate(268.03)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C12')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-19"
                data-name="Rectángulo 3"
                transform="translate(0.438 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C12')
                      ? '--purchased'
                      : selectedTickets.includes('C12')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-19"
                data-name="Rectángulo 4"
                transform="translate(0.438 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C12')
                      ? '--purchased'
                      : selectedTickets.includes('C12')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_12"
                data-name="12"
                transform="translate(4.438 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  12
                </tspan>
              </text>
            </g>
            <g
              id="C13"
              transform="translate(288.848)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C13')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-20"
                data-name="Rectángulo 3"
                transform="translate(-0.38 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C13')
                      ? '--purchased'
                      : selectedTickets.includes('C13')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-20"
                data-name="Rectángulo 4"
                transform="translate(0.62 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C13')
                      ? '--purchased'
                      : selectedTickets.includes('C13')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_13"
                data-name="13"
                transform="translate(4.62 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  13
                </tspan>
              </text>
            </g>
            <g
              id="C14"
              transform="translate(309.666)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C14')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-21"
                data-name="Rectángulo 3"
                transform="translate(-0.198 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C14')
                      ? '--purchased'
                      : selectedTickets.includes('C14')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-21"
                data-name="Rectángulo 4"
                transform="translate(0.802 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C14')
                      ? '--purchased'
                      : selectedTickets.includes('C14')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_14"
                data-name="14"
                transform="translate(4.802 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  14
                </tspan>
              </text>
            </g>
            <g
              id="C15"
              transform="translate(330.484)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C15')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-22"
                data-name="Rectángulo 3"
                transform="translate(-0.015 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C15')
                      ? '--purchased'
                      : selectedTickets.includes('C15')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-22"
                data-name="Rectángulo 4"
                transform="translate(0.985 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C15')
                      ? '--purchased'
                      : selectedTickets.includes('C15')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_15"
                data-name="15"
                transform="translate(3.985 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  15
                </tspan>
              </text>
            </g>
            <g
              id="C16"
              transform="translate(351.301)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C16')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-23"
                data-name="Rectángulo 3"
                transform="translate(0.167 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C16')
                      ? '--purchased'
                      : selectedTickets.includes('C16')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-23"
                data-name="Rectángulo 4"
                transform="translate(1.167 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C16')
                      ? '--purchased'
                      : selectedTickets.includes('C16')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_16"
                data-name="16"
                transform="translate(4.167 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  16
                </tspan>
              </text>
            </g>
            <g
              id="C17"
              transform="translate(372.119)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C17')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-24"
                data-name="Rectángulo 3"
                transform="translate(0.349 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C17')
                      ? '--purchased'
                      : selectedTickets.includes('C17')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-24"
                data-name="Rectángulo 4"
                transform="translate(1.349 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C17')
                      ? '--purchased'
                      : selectedTickets.includes('C17')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_17"
                data-name="17"
                transform="translate(4.349 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  17
                </tspan>
              </text>
            </g>
            <g
              id="C18"
              transform="translate(392.937)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('C18')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-25"
                data-name="Rectángulo 3"
                transform="translate(-0.469 0.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C18')
                      ? '--purchased'
                      : selectedTickets.includes('C18')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-25"
                data-name="Rectángulo 4"
                transform="translate(0.531 12.152)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('C18')
                      ? '--purchased'
                      : selectedTickets.includes('C18')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_18"
                data-name="18"
                transform="translate(4.531 25.152)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  18
                </tspan>
              </text>
            </g>
          </g>
          <g id="seatsB" transform="translate(669.73 425.947)">
            <g
              id="B1"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B1')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-26"
                data-name="Rectángulo 3"
                transform="translate(0.27 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B1')
                      ? '--purchased'
                      : selectedTickets.includes('B1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-26"
                data-name="Rectángulo 4"
                transform="translate(1.27 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B1')
                      ? '--purchased'
                      : selectedTickets.includes('B1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_1-3"
                data-name="1"
                transform="translate(7.27 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  1
                </tspan>
              </text>
            </g>
            <g
              id="B2"
              transform="translate(19.95)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B2')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-27"
                data-name="Rectángulo 3"
                transform="translate(0.32 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B2')
                      ? '--purchased'
                      : selectedTickets.includes('B2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-27"
                data-name="Rectángulo 4"
                transform="translate(1.32 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B2')
                      ? '--purchased'
                      : selectedTickets.includes('B2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_2-3"
                data-name="2"
                transform="translate(7.32 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
            </g>
            <g
              id="B3"
              transform="translate(39.901)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B3')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-28"
                data-name="Rectángulo 3"
                transform="translate(0.369 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B3')
                      ? '--purchased'
                      : selectedTickets.includes('B3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-28"
                data-name="Rectángulo 4"
                transform="translate(0.369 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B3')
                      ? '--purchased'
                      : selectedTickets.includes('B3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_3-3"
                data-name="3"
                transform="translate(7.369 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  3
                </tspan>
              </text>
            </g>
            <g
              id="B4"
              transform="translate(59.851)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B4')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-29"
                data-name="Rectángulo 3"
                transform="translate(0.419 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B4')
                      ? '--purchased'
                      : selectedTickets.includes('B4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-29"
                data-name="Rectángulo 4"
                transform="translate(0.419 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B4')
                      ? '--purchased'
                      : selectedTickets.includes('B4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_4-3"
                data-name="4"
                transform="translate(7.419 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  4
                </tspan>
              </text>
            </g>
            <g
              id="B5"
              transform="translate(79.802)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B5')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-30"
                data-name="Rectángulo 3"
                transform="translate(0.468 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B5')
                      ? '--purchased'
                      : selectedTickets.includes('B5')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-30"
                data-name="Rectángulo 4"
                transform="translate(0.468 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B5')
                      ? '--purchased'
                      : selectedTickets.includes('B5')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_5-2"
                data-name="5"
                transform="translate(6.468 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  5
                </tspan>
              </text>
            </g>
            <g
              id="B7"
              transform="translate(123.172)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B7')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-31"
                data-name="Rectángulo 3"
                transform="translate(0.098 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B7')
                      ? '--purchased'
                      : selectedTickets.includes('B7')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-31"
                data-name="Rectángulo 4"
                transform="translate(1.098 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B7')
                      ? '--purchased'
                      : selectedTickets.includes('B7')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_7-2"
                data-name="7"
                transform="translate(7.098 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  7
                </tspan>
              </text>
            </g>
            <g
              id="B9"
              transform="translate(183.891)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B9')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-32"
                data-name="Rectángulo 3"
                transform="translate(0.379 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B9')
                      ? '--purchased'
                      : selectedTickets.includes('B9')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-32"
                data-name="Rectángulo 4"
                transform="translate(0.379 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B9')
                      ? '--purchased'
                      : selectedTickets.includes('B9')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_9-2"
                data-name="9"
                transform="translate(7.379 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  9
                </tspan>
              </text>
            </g>
            <g
              id="B14"
              transform="translate(287.98)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B14')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-33"
                data-name="Rectángulo 3"
                transform="translate(0.29 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B14')
                      ? '--purchased'
                      : selectedTickets.includes('B14')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-33"
                data-name="Rectángulo 4"
                transform="translate(1.29 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B14')
                      ? '--purchased'
                      : selectedTickets.includes('B14')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_14-2"
                data-name="14"
                transform="translate(4.29 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  14
                </tspan>
              </text>
            </g>
            <g
              id="B15"
              transform="translate(327.014)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B15')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-34"
                data-name="Rectángulo 3"
                transform="translate(0.256 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B15')
                      ? '--purchased'
                      : selectedTickets.includes('B15')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-34"
                data-name="Rectángulo 4"
                transform="translate(1.256 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B15')
                      ? '--purchased'
                      : selectedTickets.includes('B15')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_15-2"
                data-name="15"
                transform="translate(4.256 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  15
                </tspan>
              </text>
            </g>
            <g
              id="B16"
              transform="translate(347.832)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B16')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-35"
                data-name="Rectángulo 3"
                transform="translate(0.438 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B16')
                      ? '--purchased'
                      : selectedTickets.includes('B16')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-35"
                data-name="Rectángulo 4"
                transform="translate(0.438 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B16')
                      ? '--purchased'
                      : selectedTickets.includes('B16')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_16-2"
                data-name="16"
                transform="translate(4.438 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  16
                </tspan>
              </text>
            </g>
            <g
              id="B17"
              transform="translate(368.65)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B17')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-36"
                data-name="Rectángulo 3"
                transform="translate(-0.38 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B17')
                      ? '--purchased'
                      : selectedTickets.includes('B17')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-36"
                data-name="Rectángulo 4"
                transform="translate(0.62 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B17')
                      ? '--purchased'
                      : selectedTickets.includes('B17')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_17-2"
                data-name="17"
                transform="translate(4.62 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  17
                </tspan>
              </text>
            </g>
            <g
              id="B18"
              transform="translate(389.468)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B18')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-37"
                data-name="Rectángulo 3"
                transform="translate(-0.198 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B18')
                      ? '--purchased'
                      : selectedTickets.includes('B18')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-37"
                data-name="Rectángulo 4"
                transform="translate(0.802 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B18')
                      ? '--purchased'
                      : selectedTickets.includes('B18')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_18-2"
                data-name="18"
                transform="translate(4.802 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  18
                </tspan>
              </text>
            </g>
            <g
              id="B19"
              transform="translate(410.285)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B19')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-38"
                data-name="Rectángulo 3"
                transform="translate(-0.015 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B19')
                      ? '--purchased'
                      : selectedTickets.includes('B19')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-38"
                data-name="Rectángulo 4"
                transform="translate(0.985 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B19')
                      ? '--purchased'
                      : selectedTickets.includes('B19')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_19"
                data-name="19"
                transform="translate(3.985 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  19
                </tspan>
              </text>
            </g>
            <g
              id="B20"
              transform="translate(431.103)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B20')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-39"
                data-name="Rectángulo 3"
                transform="translate(0.167 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B20')
                      ? '--purchased'
                      : selectedTickets.includes('B20')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-39"
                data-name="Rectángulo 4"
                transform="translate(1.167 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B20')
                      ? '--purchased'
                      : selectedTickets.includes('B20')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_20"
                data-name="20"
                transform="translate(4.167 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  20
                </tspan>
              </text>
            </g>
            <g
              id="B21"
              transform="translate(451.921)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B21')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-40"
                data-name="Rectángulo 3"
                transform="translate(0.349 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B21')
                      ? '--purchased'
                      : selectedTickets.includes('B21')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-40"
                data-name="Rectángulo 4"
                transform="translate(1.349 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B21')
                      ? '--purchased'
                      : selectedTickets.includes('B21')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_21"
                data-name="21"
                transform="translate(4.349 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  21
                </tspan>
              </text>
            </g>
            <g
              id="B22"
              transform="translate(472.739)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B22')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-41"
                data-name="Rectángulo 3"
                transform="translate(-0.469 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B22')
                      ? '--purchased'
                      : selectedTickets.includes('B22')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-41"
                data-name="Rectángulo 4"
                transform="translate(0.531 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B22')
                      ? '--purchased'
                      : selectedTickets.includes('B22')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_22"
                data-name="22"
                transform="translate(4.531 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  22
                </tspan>
              </text>
            </g>
            <g
              id="B10"
              transform="translate(204.709)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B10')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-42"
                data-name="Rectángulo 3"
                transform="translate(-0.439 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B10')
                      ? '--purchased'
                      : selectedTickets.includes('B10')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-42"
                data-name="Rectángulo 4"
                transform="translate(0.561 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B10')
                      ? '--purchased'
                      : selectedTickets.includes('B10')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_10-2"
                data-name="10"
                transform="translate(4.561 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  10
                </tspan>
              </text>
            </g>
            <g
              id="B11"
              transform="translate(225.527)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B11')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-43"
                data-name="Rectángulo 3"
                transform="translate(-0.257 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B11')
                      ? '--purchased'
                      : selectedTickets.includes('B11')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="18" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-43"
                data-name="Rectángulo 4"
                transform="translate(0.743 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B11')
                      ? '--purchased'
                      : selectedTickets.includes('B11')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_11-2"
                data-name="11"
                transform="translate(4.743 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  11
                </tspan>
              </text>
            </g>
            <g
              id="B12"
              transform="translate(246.345)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B12')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-44"
                data-name="Rectángulo 3"
                transform="translate(-0.075 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B12')
                      ? '--purchased'
                      : selectedTickets.includes('B12')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-44"
                data-name="Rectángulo 4"
                transform="translate(0.925 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B12')
                      ? '--purchased'
                      : selectedTickets.includes('B12')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="16" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_12-2"
                data-name="12"
                transform="translate(3.925 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  12
                </tspan>
              </text>
            </g>
            <g
              id="B13"
              transform="translate(267.163)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B13')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-45"
                data-name="Rectángulo 3"
                transform="translate(0.107 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B13')
                      ? '--purchased'
                      : selectedTickets.includes('B13')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-45"
                data-name="Rectángulo 4"
                transform="translate(1.107 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B13')
                      ? '--purchased'
                      : selectedTickets.includes('B13')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_13-2"
                data-name="13"
                transform="translate(4.107 26.053)"
                fill="#707070"
                fontSize="9"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  13
                </tspan>
              </text>
            </g>
            <g
              id="B8"
              transform="translate(143.123)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('B8')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-46"
                data-name="Rectángulo 3"
                transform="translate(0.147 0.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B8')
                      ? '--purchased'
                      : selectedTickets.includes('B8')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="17" height="9" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="8"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-46"
                data-name="Rectángulo 4"
                transform="translate(1.147 12.053)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('B8')
                      ? '--purchased'
                      : selectedTickets.includes('B8')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                strokeWidth="1"
              >
                <rect width="15" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_8-2"
                data-name="8"
                transform="translate(7.147 25.053)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  8
                </tspan>
              </text>
            </g>
          </g>
          <g id="seatsA" transform="translate(853.621 385.179)">
            <g
              id="A1"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('A1')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-46"
                data-name="Rectángulo 3"
                transform="translate(0.379 -0.179)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A1')
                      ? '--purchased'
                      : selectedTickets.includes('A1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-46"
                data-name="Rectángulo 4"
                transform="translate(0.379 11.821)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A1')
                      ? '--purchased'
                      : selectedTickets.includes('A1')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="16" height="6" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="5"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_1-4"
                data-name="1"
                transform="translate(7.379 24.821)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  1
                </tspan>
              </text>
            </g>
            <g
              id="A2"
              transform="translate(20.818)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('A2')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-48"
                data-name="Rectángulo 3"
                transform="translate(-0.439 -0.179)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A2')
                      ? '--purchased'
                      : selectedTickets.includes('A2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="18" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-48"
                data-name="Rectángulo 4"
                transform="translate(0.561 11.821)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A2')
                      ? '--purchased'
                      : selectedTickets.includes('A2')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="16" height="6" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="5"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_2-4"
                data-name="2"
                transform="translate(6.561 24.821)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
            </g>
            <g
              id="A3"
              transform="translate(41.636)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('A3')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-49"
                data-name="Rectángulo 3"
                transform="translate(-0.257 -0.179)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A3')
                      ? '--purchased'
                      : selectedTickets.includes('A3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="18" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-49"
                data-name="Rectángulo 4"
                transform="translate(0.743 11.821)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A3')
                      ? '--purchased'
                      : selectedTickets.includes('A3')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="16" height="6" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="5"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_3-4"
                data-name="3"
                transform="translate(6.743 24.821)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  3
                </tspan>
              </text>
            </g>
            <g
              id="A4"
              transform="translate(62.454)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('A4')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-50"
                data-name="Rectángulo 3"
                transform="translate(-0.075 -0.179)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A4')
                      ? '--purchased'
                      : selectedTickets.includes('A4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-50"
                data-name="Rectángulo 4"
                transform="translate(0.925 11.821)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A4')
                      ? '--purchased'
                      : selectedTickets.includes('A4')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="16" height="6" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="5"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_4-4"
                data-name="4"
                transform="translate(6.925 24.821)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  4
                </tspan>
              </text>
            </g>
            <g
              id="A5"
              transform="translate(83.271)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('A5')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-51"
                data-name="Rectángulo 3"
                transform="translate(0.107 -0.179)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A5')
                      ? '--purchased'
                      : selectedTickets.includes('A5')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-51"
                data-name="Rectángulo 4"
                transform="translate(1.107 11.821)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A5')
                      ? '--purchased'
                      : selectedTickets.includes('A5')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="15" height="6" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="5"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_5-3"
                data-name="5"
                transform="translate(7.107 24.821)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  5
                </tspan>
              </text>
            </g>
            <g
              id="A6"
              transform="translate(104.089)"
              className={`cinema__seat${
                ticketsSold
                  ? ticketsSold.includes('A6')
                    ? '--no-available'
                    : ''
                  : '--error'
              }`}
              onClick={handleTicket}
            >
              <g
                id="Rectángulo_3-52"
                data-name="Rectángulo 3"
                transform="translate(0.29 -0.179)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A6')
                      ? '--purchased'
                      : selectedTickets.includes('A6')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="17" height="10" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectángulo_4-52"
                data-name="Rectángulo 4"
                transform="translate(1.29 11.821)"
                className={`cinema__seat${
                  ticketsSold
                    ? ticketsSold.includes('A6')
                      ? '--purchased'
                      : selectedTickets.includes('A6')
                      ? '--selected'
                      : '--available'
                    : '--error'
                }`}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <rect width="15" height="6" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="14"
                  height="5"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <text
                id="_6-2"
                data-name="6"
                transform="translate(7.29 24.821)"
                fill="#707070"
                fontSize="8"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  6
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
