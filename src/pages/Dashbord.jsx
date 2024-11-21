import { Card, DotLoader, NavBar } from '../components';
import { useAllArticlesQuery } from '../Features/articleSlice';
function Dashbord() {
  const { data: articles, isLoading, error } = useAllArticlesQuery();

  if (isLoading) return <div><DotLoader/></div>;
  if (error) return <div>Error: {error.message}</div>;
  // console.log(articles);
  
  return (
    <div>
      <NavBar />
      <div className='grid lg:justify-center grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col  lg:items-center mt-12  gap-7 mx-8'>
        {articles.map((article) => (
          <div key={article.$id} className='hover:scale-105  transition-all duration-300'>
            <Card
              thumbnail_Id={article.thumbnail_Id}
              content={article.content}
              title={article.title}
              userName={article.userName}
              date={article.date}
              $id={article.$id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashbord;