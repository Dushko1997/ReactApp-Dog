import HomeIcon from '@mui/icons-material/Home';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Props {
    icon: string;
}

export default function AdminSidebarIcon({ icon }: Props) {
    switch (icon) {
        case 'home':
            return <HomeIcon />;
        case 'star':
            return <StarBorderIcon />;

        default:
            return <></>;
    }
}