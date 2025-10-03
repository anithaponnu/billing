import { Avatar, Container, Paper } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';

export default function Loginv2() {
    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{marginTop:8, padding:2}}>
                <Avatar
                sx={{
                    mx: "auto",
                    bgcolor: "secondary.main",
                    textAlign: "center",
                    mb: 1,
                }}>
                <LockOutlineIcon />

                </Avatar>
            </Paper>
        </Container>
    )
}