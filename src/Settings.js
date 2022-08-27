const Settings = () => {
    return (
        <nav className="settings">
            <div className="theme">
                <h2><b>Page theme:</b></h2>
                    <div className="dropdown">
                        <button className="dropbtn">Theme</button>
                        <div className="dropdown-content">
                            <a href="#">Light</a>
                            <a href="#">Dark</a>
                            <a href="#">Mid-way gray</a>
                        </div>
                    </div>
            </div>
            <div className="plan">
                <h2><b>Your Plan:</b></h2>
                    <div className="dropdown">
                        <button className="dropbtn">Your Plan</button>
                        <div className="dropdown-content">
                            <a href="#">Free User</a>
                            <a href="#">Paid-Monthly</a>
                            <a href="#">Paid-Annually</a>
                        </div>
                    </div>
            </div>
            <div className="notifications">
                <h2><b>Notifications:</b></h2>
                    <div className="dropdown">
                        <button className="dropbtn">Notifications</button>
                        <div className="dropdown-content">
                            <a href="#">All</a>
                            <a href="#">Custom</a>
                            <a href="#">Important Only</a>
                        </div>
                    </div>
            </div>
            <div className="security">
                Security Measures:
                <button><a href='#'>Security</a></button>
            </div>
            <div className="file-display">
                File Display mode:
                <button><a href='#'>File Display</a></button>
            </div>
        </nav>
    )
}
export default Settings;