import { CONTEXT_PATH } from '../../../config';

export default function ComingSoonId({ movie }) {
  return (
    <div className="coming-soon">
      <div
        className="coming-soon__banner item"
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>
      <div className="coming-soon__info item">
        <div className="coming-soon__info--window"></div>
        <div className="coming-soon__info--info"></div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const fetchData = await fetch(`${CONTEXT_PATH}/movies/${id}`);
  const { response } = await fetchData.json();
  return {
    props: {
      movie: response,
    },
  };
}
