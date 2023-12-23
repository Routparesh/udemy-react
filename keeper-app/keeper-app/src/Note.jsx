
import PropTypes from 'prop-types';

export default function Note({title , content}){  
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            
        </div>
    )
   
}

Note.propTypes = {
    title: PropTypes.string.isRequired, // Assumes title is a required string
    content: PropTypes.string.isRequired, // Assumes content is a required string
  };