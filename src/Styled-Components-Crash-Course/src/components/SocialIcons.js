import {FaTwitter, FaFacebook,  FaLinkedin} from 'react-icons/fa';
import { StyledSocialIcons } from './styled/SocialIcons.styled';

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href="#1"><FaTwitter /></a>
            </li>
            <li>
                <a href="#2"><FaFacebook /></a>
            </li>
            <li>
                <a href="#3"><FaLinkedin /></a>
            </li>
        </StyledSocialIcons>
    )
}