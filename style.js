import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    con: {
        padding: theme.spacing(10, 0, 6),
    },
    head: {
        padding: theme.spacing(0, 0, 6),
    },
    input: {
        padding: theme.spacing(0, 0, 5)
    },
    footer: {
        marginTop: '20px'
    },
    remember: {
        marginBottom: '10px'
    }
}));
export default useStyle;