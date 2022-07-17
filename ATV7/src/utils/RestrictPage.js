import { Link } from "react-router-dom";

const RestrictPage = (props) => {
    if (props.isLogged)
        return props.children
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%'
        }}>
            <h3>Erro de acesso. Realize o login</h3>
            <Link to="/" className="nav-link">Home</Link>
        </div>
    )
}

export default RestrictPage