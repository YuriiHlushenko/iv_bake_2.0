/* eslint-disable max-len */
type Props = {
  addClass?: string;
};

export const TIgram: React.FC<Props> = ({ addClass }) => (
  <>
    <a
      href="https://instagram.com/iv_bake?igshid=YmMyMTA2M2Y="
      className="menu__link"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={`menu__icon ${addClass}`}
        src="images/instagram.svg"
        alt="instagram"
      />
    </a>

    <a
      href="https://t.me/IvannaHavryliuk"
      className="menu__link"
      aria-label="telegram"
    >
      <img
        className={`menu__icon ${addClass}`}
        src="images/svg/telegram.svg"
        alt="telegram"
      />
    </a>
  </>
);
