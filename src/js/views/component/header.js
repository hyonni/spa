let Header = {
    render : ()=>{
        let view = `
            <header class="header">
                <h1>SPA</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Main</a> 
                        </li>
                        <li>
                            <a href="/list">list</a> 
                        </li>
                    </ul>
                </nav>
            </header>
        `;
        return view;
    }
}

export default Header;