import PropTypes from 'prop-types'

export const Quality = ({ title, description }) => {
    return (
        <div className='quality'>
            <h3 className='quality-name'>{title}</h3>
            <p className='quality-description'>{description}</p>
        </div>
    )
}

Quality.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}