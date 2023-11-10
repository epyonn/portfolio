import { SxProps, Theme } from '@mui/system';

interface HeaderStyleProps {
    appBar: SxProps<Theme>;
    menuButton: SxProps<Theme>;
    title: SxProps<Theme>;
    buttonContainer: SxProps<Theme>;
}

const headerStyles: HeaderStyleProps = {
    appBar: {
        backgroundColor: 'white',
        color: 'black',
        elevation: 0,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
};

export default headerStyles;