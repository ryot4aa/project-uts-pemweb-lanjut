const Title = ({ title, highlight, subtitle, isCenter = true }) => {
  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} mb-6`}>
        <h2 className="capitalize text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
          {title}{' '}
          <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-400 bg-clip-text text-transparent'>
            {highlight}
          </span>
        </h2>
        <p className="capitalize">{subtitle}</p>
    </div>
  );
};

export default Title;
