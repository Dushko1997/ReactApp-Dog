import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useStore } from "../app/stores/store"
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { Container, Paper, Typography, Box, Button, Stack } from "@mui/material";
import { createDogsTableColumns, } from "./Dogs/DogsHelper";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';


export default observer(function MainPage() {
    const { dogsStore: { loadDogs, dogs, addFavorite, isFavorite, removeFavorite } } = useStore();
    const apiRef = useGridApiRef();
    const [selectedDogs, setSelectedDogs] = useState<number[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadDogs();
    }, [loadDogs])

    const handleFavourite = () => {
        selectedDogs.forEach((dogId: number) => {
            if (isFavorite(dogId)) {
                removeFavorite(dogId);
            } else {
                addFavorite(dogId);
            }
        });
    };

    const columns = createDogsTableColumns(navigate);

    return (
        <>
            <Container maxWidth="lg" className="container">
                <Paper className="paper">
                    <Typography color='primary' variant="h6" className="typography" gutterBottom>
                        Dog Breeds
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ marginBottom: '10px' }}>
                        <Button startIcon={<StarIcon/>} color='error' variant='contained' onClick={handleFavourite}>
                            Set as Favorite
                        </Button>
                    </Stack>
                    <Box className="data-grid">
                        <DataGrid
                            rows={dogs}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    }
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            apiRef={apiRef}
                            onRowSelectionModelChange={(ids) => {
                                setSelectedDogs(ids.map(id => Number(id)));
                            }}
                        />
                    </Box>
                </Paper>
            </Container>
        </>
    )

})