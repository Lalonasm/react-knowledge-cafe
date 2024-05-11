import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";


const Blog = ({  blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id,title, cover, author, reading_time, author_img, posted_date, hashtag
    } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-xl ' src={cover} alt={`Cover picture of the ${title}`} />
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtag}</p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark as Read</button>
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='h-12 rounded-xl' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-500'> <BsBookmark></BsBookmark></button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    id: PropTypes.string
}

export default Blog;