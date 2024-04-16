import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#">What is Pokémon?</a>
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Sitemap</a>
                </div>
                <div className="footer-info">
                    <p>©Pokémon. ©Nintendo/Creatures Inc./GAME FREAK inc.</p>
                    <p>©Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. ©Pokémon. TM and ® are trademarks of Nintendo.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
