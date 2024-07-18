import React from "react";
import '../styles.css'

export default function Footer() {
    var currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="text">
                ©️ {currentYear} Moviedux, All right reserved.

            </p>
        </footer>
    );
}