import { Service } from '../components/Services/Service'
import plansJSON from '../util/Plans.json'
import '../styles/Services.css'

export const Services = () => {
    return (
        <div className="service-page">
            <h2 className="subtitle">NUESTROS SERVICIOS</h2>
            <div className="services-container">
                {
                    plansJSON.map((plan) => {
                        return (
                            <Service name={plan.title} description={plan.description} key={plan.id} cost={plan.cost} />
                        )
                    })
                }
            </div>
        </div>
    )
}
