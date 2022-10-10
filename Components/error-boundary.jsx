import react, { Component } from 'react';
import { ErrorUI, setBg } from './Styling/styling-components';

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }


    render() {
        if (this.state.hasError) {
            {setBg()}
            return <div style={{ ...ErrorUI.positioning }}>
                <div style={{ ...ErrorUI.fallbackUi }}>
                    <div >
                        <h1>Ett oväntat fel inträffade</h1>
                        <h3>Försök att ladda om sidan på nytt</h3>
                        <button style={{ ...ErrorUI.button }} onClick={() => { window.location.reload() }}>Ladda om</button>
                    </div>
                </div>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary