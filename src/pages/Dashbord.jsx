import { Card, DotLoader, NavBar } from '../components';
import { useAllArticlesQuery } from '../Features/articleSlice';

function Dashboard() {
  const { data: articles, isLoading, error } = useAllArticlesQuery();

  
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <NavBar />
      {isLoading && <DotLoader/>}
      {!isLoading &&  <div className='w-full mt-10 '>
        <div className='grid lg:grid-cols-1 gap-5 lg:mx-10   '>
            {articles.map((article) => (
              <div 
                key={article.$id} 
                className='w-full flex justify-center hover:scale-105 transition-all duration-300'
              >
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
}
    </div>
  );
}

export default Dashboard;