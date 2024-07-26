import './header.css'

function Header(){

    return (
        <nav class = 'header'>
            <img id='NHS' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/National_Health_Service_%28England%29_logo.svg/2560px-National_Health_Service_%28England%29_logo.svg.png" alt="NHS Logo" />
            <img  src="https://media.licdn.com/dms/image/D4E0BAQEXZa1OkaEhcg/company-logo_200_200/0/1686049099850/dotplott_logo?e=1729728000&v=beta&t=YIpyVLwkKcUg-VDMIlZPCSoTeN29bPccaqtZCe6yCuE" alt="Dotplot Logo" />
            <button id="sign_out">Sign out</button>
        </nav>
        );
}

export default Header