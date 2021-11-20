import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StyledSocilaIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
    return (
        <StyledSocilaIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>

            </li>
            <li>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>

            </li>
        </StyledSocilaIcons>
    );
}
