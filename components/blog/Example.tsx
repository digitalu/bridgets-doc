export const Blog1 = () => {
  return (
    <div className="grid grid-cols-3">
      <Card
        image={'/covers/juju.jpeg'}
        position={2}
        prevPosition={12}
        title={'Jujutsu Kaisen'}
        description={
          'Chaque année au Japon, on recense plus de 10 000 morts inexpliquées et portés disparus. Dans la majorité des cas, ce sont les sentiments négatifs des êtres humains qui sont en cause. Souffrance, regrets, humiliation : leur accumulation dans un même endroit provoque des malédictions souvent fatale...'
        }
        genres={['Action', 'Aventure', 'Drame', 'Fantastique', 'Mystère']}
      />
      <Card
        image={'/covers/hero.jpeg'}
        position={3}
        prevPosition={99}
        title={'My Hero Academia'}
        description={
          "Dans un monde où 80 % de la population possède un super‑pouvoir appelé alter, les héros font partie de la vie quotidienne. Et les super‑vilains aussi ! Face à eux se dresse l'invincible All Might, le plus puissant des héros ! Le jeune Izuku Midoriya en est un fan absolu. Il n'a qu'un rêve : entre..."
        }
        genres={['Action', 'Comédie', 'School Life', 'Surnaturel']}
      />
      <Card
        image={'/covers/tokyo.jpeg'}
        position={1}
        prevPosition={8}
        title={'Tokyo Revengers'}
        description={
          "En regardant les informations, Takemichi Hanagaki apprend que sa petite amie, Hinata Tachibana, qui était à l'école avec lui, est décédée. La seule petite amie qu'il ait eu vient d'être tuée par un groupe infâme connu sous le nom de Tokyo Manjikai. Au plus fort de sa vie, il fait un bond dans le..."
        }
        genres={['Aventure', 'Fantastique', 'Comédie', 'Assassin']}
      />
    </div>
  );
};

export const Card = ({
  image,
  position,
  prevPosition,
  title,
  description,
  genres,
}) => {
  const genresText = genres.join(', ');
  return (
    <div className="relative overflow-hidden mx-auto rounded-md h-80 group aspect-[11/16]">
      <img className="absolute inset-0" src={image} />
      <div className="absolute bottom-0 z-10 w-full transition-all duration-500 translate-y-full h-3/4 group-hover:translate-y-0">
        <div
          className="w-full h-full px-3"
          style={{
            background:
              'linear-gradient(180deg, rgba(33, 38, 47, 0) 0%, rgb(33,38,47, 0.4) 15%, rgba(33, 38, 47, 0.9) 50.35%, #21262F 100%)',
          }}
        >
          <div className="flex pt-8 pb-2 transition-transform duration-500 -translate-y-full group-hover:translate-y-0">
            <p className="w-full text-sm font-bold text-slate-100">{title}</p>
            <div className="flex gap-1.5">
              <img src="/Icon/Outline/Icon.svg" className="h-3 mt-1" />
              <p className="text-sm font-bold text-green-300">
                {prevPosition - position}
              </p>
            </div>
          </div>
          <div className="transition-opacity duration-500 delay-150 opacity-0 group-hover:opacity-100">
            <p className="text-sm line-clamp-6 text-slate-200">{description}</p>
            <p className="mt-2 text-sm line-clamp-2 text-slate-200">
              <span className="text-xs font-semibold uppercase text-slate-400">
                Genres:{' '}
              </span>
              {genresText}
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 z-0 w-full h-24"
        style={{
          background:
            'linear-gradient(180deg, rgba(33, 38, 47, 0) 0%, rgba(33, 38, 47, 0.5) 37.35%, rgba(33, 38, 47, 0.8) 100%)',
          perspective: '1200px',
        }}
      />
    </div>
  );
};
