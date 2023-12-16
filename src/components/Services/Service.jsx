import PropTypes from 'prop-types'

export const Service = ({ name, description, cost }) => {
	return (
		<div className="service-card">
			<h3 className="service-name">{name}</h3>
			<p className="service-description">
				{description}
			</p>
			<p className='service-cost'>
				{
					cost
				}
			</p>
		</div>
	)
}

Service.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	cost: PropTypes.string.isRequired
}