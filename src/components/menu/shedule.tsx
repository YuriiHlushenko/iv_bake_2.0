/* eslint-disable max-len */
type Props = {
  addClass?: string;
  iconClass?: string;
};

export const Shedule:React.FC<Props> = ({ addClass, iconClass }) => (
  <p className={`menu__link ${addClass}`} title="розклад роботи">
    <svg className={`menu__icon menu__icon--map ${iconClass}`} viewBox="0 0 32 32">
      <g>
        <polyline
          fill="none"
          points="   649,137.999 675,137.999 675,155.999 661,155.999"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="   653,155.999 649,155.999 649,141.999  "
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="   661,156 653,162 653,156  "
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
      <g>
        <g>
          <path
            d="M16,30c-3.74,0-7.255-1.456-9.899-4.101C1.779,21.578,0.752,15.025,3.547,9.595C3.8,9.104,4.402,8.911,4.894,9.163    s0.685,0.855,0.432,1.347C2.93,15.164,3.81,20.78,7.515,24.485C9.781,26.752,12.794,28,16,28c3.205,0,6.219-1.248,8.485-3.515    S28,19.205,28,16c0-3.206-1.248-6.219-3.515-8.485S19.206,4,16,4c-3.206,0-6.219,1.249-8.485,3.515    c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414C8.745,3.457,12.26,2,16,2c3.74,0,7.256,1.457,9.899,4.101    C28.544,8.745,30,12.26,30,16c0,3.739-1.456,7.255-4.101,9.899C23.256,28.544,19.74,30,16,30z"
          />
        </g>
        <g>
          <path
            d="M20.999,21c-0.219,0-0.439-0.071-0.624-0.219l-5-4C15.138,16.591,15,16.304,15,16V8c0-0.552,0.448-1,1-1s1,0.448,1,1v7.52    l4.625,3.699c0.431,0.346,0.501,0.975,0.156,1.406C21.583,20.871,21.293,21,20.999,21z"
          />
        </g>
      </g>
    </svg>
    Працюємо
    <br />
    9:00 - 20:00
    <br />
    Неділя - 10:00 - 20:00
    <br />
    Все приготовлено з любов&apos;ю ♥
  </p>
);
