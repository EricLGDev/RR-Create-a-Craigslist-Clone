import Help from './Help'

const liStyle = {
    'display' : 'inline',
    'margin' : '3px',
    'padding' : '1px',
    'border' : '2px solid black'
}

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h3>Listings</h3>
            <div>
                <ul>
                    <li style={liStyle}>all</li>
                    <li style={liStyle}>owner</li>
                    <li style={liStyle}>dealer</li>
                </ul>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias hic delectus eligendi aliquam dolores velit eos repudiandae repellat odit iure itaque, ex iste assumenda aspernatur quo voluptate, mollitia illum?</p>
            <Help />
        </div>
    )
}

export default Sidebar