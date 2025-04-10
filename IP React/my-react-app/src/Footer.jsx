
function Footer(){

    return(
        <footer>
            {/* arata anul curent */}
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    );
}

export default Footer