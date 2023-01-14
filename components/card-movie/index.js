import Image from 'next/image';
import Link from 'next/link';
import { CiRead, CiCalendarDate, CiTimer } from 'react-icons/ci';

export const CardMovie = ({ href, image, width, height, state }) => {
  return (
    <Link href={href}>
      <div className="card">
        <div className="icon-movie">
          {state === 'A' ? (
            <CiRead size={60} color="white" />
          ) : state === 'P' ? (
            <CiCalendarDate size={60} color="white" />
          ) : (
            <CiTimer size={60} color="white" />
          )}
        </div>

        {state === 'P' && (
          <div className="card--pre-sale">
            <div className="title">PRE-VENTA</div>
          </div>
        )}
        {state === 'C' && (
          <div className="card--coming">
            <div className="title">PRÓXIMAMENTE</div>
          </div>
        )}

        <div
          className="card__content"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card__footer">Hey!! Footer</div>
      </div>
    </Link>
  );
};
