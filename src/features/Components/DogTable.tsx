import { Container, Paper, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Box } from "@mui/material";
import { DogImage, Dogs } from "../../app/common/types/Dogs";

interface Prosps {
    selectedDog: Dogs;
    dogImage: any;
}

export default function DogTable({ selectedDog, dogImage }: Prosps) {

    const style ={
        fontWeight: 'bold',
        fontSize: '18px',
    }

   

    return (
        <Container maxWidth="md">
            <Paper style={{ padding: '20px' }}>
                {selectedDog && (
                    <>
                        <Typography variant="h5" component="h1" gutterBottom color='primary' fontStyle='italic'>
                            {selectedDog.name}
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><Typography sx={style}>Origin:</Typography></TableCell>
                                        <TableCell>{selectedDog.origin}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography sx={style}>Temperament:</Typography></TableCell>
                                        <TableCell>{selectedDog.temperament}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography sx={style}>Bred For:</Typography></TableCell>
                                        <TableCell>{selectedDog.bred_for}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography sx={style}>Breed Group:</Typography></TableCell>
                                        <TableCell>{selectedDog.breed_group}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography sx={style}>Life Span:</Typography></TableCell>
                                        <TableCell>{selectedDog.life_span}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {dogImage && (
                            <Box mt={2}>
                                <img src={dogImage.url} alt={selectedDog.name} style={{ width: '100%', borderRadius: '8px' }} />
                            </Box>
                        )}
                    </>
                )}
            </Paper>
        </Container>
    )
} 