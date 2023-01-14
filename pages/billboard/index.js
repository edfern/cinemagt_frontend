import Image from 'next/image';
import { CONTEXT_PATH } from '../../config';
import Link from 'next/link';
import { CardMovie } from '../../components/card-movie';

export default function Billboard({ functions, comingSoon }) {
  return (
    <div className="billboard">
      <h3>Billboard</h3>
      <div className="movies">
        {functions.map((item, key) => {
          return (
            <CardMovie
              key={key}
              href={`/functions/${
                item.state === 'A' || item.state === 'P'
                  ? item.idFunction
                  : `coming-soon/${item.movie.idMovie}`
              }`}
              image={item.movie.image}
              width={350}
              height={500}
              state={item.state}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`${CONTEXT_PATH}/billboard`);
  const { response } = await data.json();

  const moviesStateA = response.filter((e) => e.state === 'A');
  const moviesStateP = response.filter((e) => e.state === 'P');

  console.log(moviesStateA.length);
  return {
    props: {
      functions: response,
      comingSoon: moviesStateP || null,
    },
  };
}
