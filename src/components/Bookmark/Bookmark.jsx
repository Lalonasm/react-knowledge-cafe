import PropTypes from 'prop-types';

const Bookmark = ({ bookmark, readingTime }) => {
    const { title } = bookmark;

    return (
        <div className='bg-slate-400 m-4 p-4 rounded-xl'>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmark;