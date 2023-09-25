import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://www.youtube.com/channel/UCcZ9ZqnnWspD_JZpYp5X_8Ql">
                    <img src="/img/youtube.svg" alt="Youtube" />
                </a>
                <a href="https://www.youtube.com/channel/UCcZ9ZqnnWspD_JZpYp5X_8Q">
                    <img src="/img/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://www.youtube.com/channel/UCcZ9ZqnnWspD_JZpYp5X_8Q">
                    <img src="/img/instagram.svg" alt="Instagram" />
                </a>
            </div>

            <img src="/img/logods.svg" alt="logo" />
            <strong>Desarrollado por DesignMA</strong>
    </footer>
}

export default Footer