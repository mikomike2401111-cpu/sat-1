interface CategoryHeroProps {
  category: 'men' | 'women' | 'unisex';
}

const categoryData = {
  men: {
    title: "Men's Clothing",
    image: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  women: {
    title: "Women's Clothing",
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  unisex: {
    title: 'Unisex Clothing',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
};

export default function CategoryHero({ category }: CategoryHeroProps) {
  const data = categoryData[category];

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
          {data.title}
        </h1>
      </div>
    </section>
  );
}
