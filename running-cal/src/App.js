import "./App.scss";

function WeekDays() {
    return (
        <div className="weekdays">
            <div>
                <p>Sunday</p>
            </div>
            <div>
                <p>Monday</p>
            </div>
            <div>
                <p>Tuesday</p>
            </div>
            <div>
                <p>Wednesday</p>
            </div>
            <div>
                <p>Thursday</p>
            </div>
            <div>
                <p>Friday</p>
            </div>
            <div>
                <p>Saturday</p>
            </div>
        </div>
    );
}

function CalCell() {
    return (
        <div className="cal-cell">
            <p></p>
            <div className="cell-checkbox" />
        </div>
    );
}

function CalRow() {
    return (
        <div className="cal-row">
            <CalCell />
            <CalCell />
            <CalCell />
            <CalCell />
            <CalCell />
            <CalCell />
            <CalCell />
        </div>
    );
}

function CalPage({ title }) {
    return (
        <div className="cal-page">
            <header className="cal-header">
                <h1>{title}</h1>
            </header>
            <WeekDays />
            <div className="cal-body">
                <CalRow></CalRow>
                <CalRow></CalRow>
                <CalRow></CalRow>
                <CalRow></CalRow>
                <CalRow></CalRow>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <CalPage title="Mitch's Marathon Method" />
            <CalPage title="Mitch's Marathon Method" />
        </div>
    );
}

export default App;
