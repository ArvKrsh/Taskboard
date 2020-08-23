import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Container } from 'react-bootstrap';
import store from '../store'

class Pie extends React.Component {

    render() {
        return (
            <Container className="chart-container"> <PieChart
                data={[
                    { title: 'One', value: store.getState().todo.length, color: '#E38627' },
                    { title: 'Two', value: store.getState().started.length, color: '#C13C37' },
                    { title: 'Three', value: store.getState().completed.length, color: '#6A2135' },
                ]} radius={PieChart.defaultProps.radius - 7}
                animate
                animationDuration={500}
                animationEasing="ease-out" labelPosition={50}
            />
            </Container>
        )
    }
}

export default Pie